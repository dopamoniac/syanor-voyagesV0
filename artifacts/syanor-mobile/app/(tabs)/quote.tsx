import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSubmitQuote } from "@workspace/api-client-react";
import type { QuoteRequest } from "@workspace/api-client-react";

import { useColors } from "@/hooks/useColors";

type TripType = "voyage" | "omra" | "hajj" | "sur-mesure";
type BudgetRange = "economique" | "standard" | "premium" | "vip";

interface QuoteForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tripType: TripType | null;
  destination: string;
  departureCity: string;
  travelers: string;
  budget: BudgetRange | null;
  departureDate: string;
  message: string;
}

const TRIP_TYPES: { key: TripType; label: string; icon: string }[] = [
  { key: "voyage", label: "Voyage agence", icon: "airplane-outline" },
  { key: "omra", label: "Omra", icon: "moon-outline" },
  { key: "hajj", label: "Hajj", icon: "star-outline" },
  { key: "sur-mesure", label: "Sur mesure", icon: "diamond-outline" },
];

const BUDGET_RANGES: { key: BudgetRange; label: string; desc: string }[] = [
  { key: "economique", label: "Économique", desc: "< 1 500 €/pers" },
  { key: "standard", label: "Standard", desc: "1 500 – 2 500 €" },
  { key: "premium", label: "Premium", desc: "2 500 – 4 000 €" },
  { key: "vip", label: "VIP", desc: "> 4 000 €/pers" },
];

const EMPTY_FORM: QuoteForm = {
  firstName: "", lastName: "", email: "", phone: "",
  tripType: null, destination: "", departureCity: "",
  travelers: "2", budget: null, departureDate: "", message: "",
};

function Label({ text, colors }: { text: string; colors: ReturnType<typeof useColors> }) {
  return <Text style={[styles.label, { color: colors.foreground }]}>{text}</Text>;
}

function Input({
  value,
  onChangeText,
  placeholder,
  colors,
  multiline,
  keyboardType,
}: {
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  colors: ReturnType<typeof useColors>;
  multiline?: boolean;
  keyboardType?: "default" | "email-address" | "phone-pad" | "numeric";
}) {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.mutedForeground}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      multiline={multiline}
      keyboardType={keyboardType ?? "default"}
      style={[
        styles.input,
        {
          backgroundColor: colors.card,
          borderColor: focused ? colors.primary : colors.border,
          color: colors.foreground,
          borderRadius: colors.radius - 2,
          minHeight: multiline ? 90 : 48,
          textAlignVertical: multiline ? "top" : "center",
        },
      ]}
    />
  );
}

export default function QuoteScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState<QuoteForm>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const { mutate: submitQuote, isPending } = useSubmitQuote({
    mutation: {
      onSuccess: () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setSubmitted(true);
      },
      onError: (err) => {
        const message = (err as any)?.response?.data?.error ?? "Une erreur est survenue. Veuillez réessayer.";
        Alert.alert("Erreur", message);
      },
    },
  });

  const set = (key: keyof QuoteForm) => (val: string | TripType | BudgetRange | null) =>
    setForm((f) => ({ ...f, [key]: val }));

  const validate = (): string | null => {
    if (!form.firstName.trim()) return "Prénom requis";
    if (!form.lastName.trim()) return "Nom requis";
    if (!form.email.trim() || !form.email.includes("@")) return "Email invalide";
    if (!form.phone.trim()) return "Téléphone requis";
    if (!form.tripType) return "Sélectionnez un type de voyage";
    return null;
  };

  const handleSubmit = () => {
    const err = validate();
    if (err) {
      Alert.alert("Champ manquant", err);
      return;
    }
    const payload: QuoteRequest = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      tripType: form.tripType!,
      destination: form.destination || undefined,
      departureCity: form.departureCity || undefined,
      travelers: form.travelers || undefined,
      budget: form.budget || undefined,
      departureDate: form.departureDate || undefined,
      message: form.message || undefined,
    };
    submitQuote({ data: payload });
  };

  if (submitted) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.primary }]}>
          <Text style={[styles.headerTitle, { color: colors.ivory }]}>Devis</Text>
        </View>
        <View style={styles.successContainer}>
          <View style={[styles.successIcon, { backgroundColor: colors.muted }]}>
            <Ionicons name="checkmark-circle" size={64} color={colors.primary} />
          </View>
          <Text style={[styles.successTitle, { color: colors.foreground }]}>Demande envoyée !</Text>
          <Text style={[styles.successSub, { color: colors.mutedForeground }]}>
            Notre équipe vous contactera sous 24h pour vous proposer un devis personnalisé.
          </Text>
          <Pressable
            onPress={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
            style={[styles.newBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}
          >
            <Text style={[styles.newBtnText, { color: colors.primaryForeground }]}>Nouvelle demande</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.ivory }]}>Demande de devis</Text>
        <Text style={[styles.headerSub, { color: colors.champagne }]}>Réponse personnalisée sous 24h</Text>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.form,
          { paddingBottom: Platform.OS === "web" ? 34 : 100 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Step 1 */}
        <View style={[styles.stepCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
          <View style={styles.stepHeader}>
            <View style={[styles.stepNum, { backgroundColor: colors.primary }]}>
              <Text style={[styles.stepNumText, { color: colors.primaryForeground }]}>1</Text>
            </View>
            <Text style={[styles.stepTitle, { color: colors.foreground }]}>Vos coordonnées</Text>
          </View>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Label text="Prénom *" colors={colors} />
              <Input value={form.firstName} onChangeText={set("firstName")} placeholder="Mohamed" colors={colors} />
            </View>
            <View style={{ flex: 1 }}>
              <Label text="Nom *" colors={colors} />
              <Input value={form.lastName} onChangeText={set("lastName")} placeholder="Benali" colors={colors} />
            </View>
          </View>
          <Label text="Email *" colors={colors} />
          <Input value={form.email} onChangeText={set("email")} placeholder="email@exemple.fr" colors={colors} keyboardType="email-address" />
          <Label text="Téléphone *" colors={colors} />
          <Input value={form.phone} onChangeText={set("phone")} placeholder="+33 6 12 34 56 78" colors={colors} keyboardType="phone-pad" />
        </View>

        {/* Step 2 — Trip type */}
        <View style={[styles.stepCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
          <View style={styles.stepHeader}>
            <View style={[styles.stepNum, { backgroundColor: colors.primary }]}>
              <Text style={[styles.stepNumText, { color: colors.primaryForeground }]}>2</Text>
            </View>
            <Text style={[styles.stepTitle, { color: colors.foreground }]}>Type de voyage *</Text>
          </View>
          <View style={styles.tripTypeGrid}>
            {TRIP_TYPES.map((t) => (
              <Pressable
                key={t.key}
                onPress={() => { Haptics.selectionAsync(); set("tripType")(t.key); }}
                style={[
                  styles.tripTypeBtn,
                  {
                    borderRadius: colors.radius - 2,
                    backgroundColor: form.tripType === t.key ? colors.primary : colors.background,
                    borderColor: form.tripType === t.key ? colors.primary : colors.border,
                  },
                ]}
              >
                <Ionicons
                  name={t.icon as any}
                  size={20}
                  color={form.tripType === t.key ? colors.primaryForeground : colors.foreground}
                />
                <Text
                  style={[
                    styles.tripTypeText,
                    { color: form.tripType === t.key ? colors.primaryForeground : colors.foreground },
                  ]}
                >
                  {t.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Step 3 — Details */}
        <View style={[styles.stepCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
          <View style={styles.stepHeader}>
            <View style={[styles.stepNum, { backgroundColor: colors.primary }]}>
              <Text style={[styles.stepNumText, { color: colors.primaryForeground }]}>3</Text>
            </View>
            <Text style={[styles.stepTitle, { color: colors.foreground }]}>Détails du voyage</Text>
          </View>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Label text="Destination" colors={colors} />
              <Input value={form.destination} onChangeText={set("destination")} placeholder="Maroc, Turquie…" colors={colors} />
            </View>
            <View style={{ flex: 1 }}>
              <Label text="Ville de départ" colors={colors} />
              <Input value={form.departureCity} onChangeText={set("departureCity")} placeholder="Paris, Lyon…" colors={colors} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Label text="Voyageurs" colors={colors} />
              <Input value={form.travelers} onChangeText={set("travelers")} placeholder="2" colors={colors} keyboardType="numeric" />
            </View>
            <View style={{ flex: 1 }}>
              <Label text="Date souhaitée" colors={colors} />
              <Input value={form.departureDate} onChangeText={set("departureDate")} placeholder="Juil 2025" colors={colors} />
            </View>
          </View>
        </View>

        {/* Step 4 — Budget */}
        <View style={[styles.stepCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
          <View style={styles.stepHeader}>
            <View style={[styles.stepNum, { backgroundColor: colors.primary }]}>
              <Text style={[styles.stepNumText, { color: colors.primaryForeground }]}>4</Text>
            </View>
            <Text style={[styles.stepTitle, { color: colors.foreground }]}>Budget envisagé</Text>
          </View>
          <View style={styles.budgetGrid}>
            {BUDGET_RANGES.map((b) => (
              <Pressable
                key={b.key}
                onPress={() => { Haptics.selectionAsync(); set("budget")(b.key); }}
                style={[
                  styles.budgetBtn,
                  {
                    borderRadius: colors.radius - 2,
                    backgroundColor: form.budget === b.key ? colors.primary : colors.background,
                    borderColor: form.budget === b.key ? colors.primary : colors.border,
                  },
                ]}
              >
                <Text style={[styles.budgetLabel, { color: form.budget === b.key ? colors.primaryForeground : colors.foreground }]}>
                  {b.label}
                </Text>
                <Text style={[styles.budgetDesc, { color: form.budget === b.key ? colors.champagne : colors.mutedForeground }]}>
                  {b.desc}
                </Text>
              </Pressable>
            ))}
          </View>
          <Label text="Message (optionnel)" colors={colors} />
          <Input
            value={form.message}
            onChangeText={set("message")}
            placeholder="Précisions, dates flexibles, demandes spéciales…"
            colors={colors}
            multiline
          />
        </View>

        {/* Submit */}
        <Pressable
          onPress={handleSubmit}
          disabled={isPending}
          style={({ pressed }) => [
            styles.submitBtn,
            {
              backgroundColor: isPending ? colors.muted : colors.primary,
              borderRadius: colors.radius,
              opacity: pressed ? 0.88 : 1,
            },
          ]}
        >
          {isPending ? (
            <Text style={[styles.submitText, { color: colors.mutedForeground }]}>Envoi en cours…</Text>
          ) : (
            <>
              <Ionicons name="send" size={18} color={colors.primaryForeground} />
              <Text style={[styles.submitText, { color: colors.primaryForeground }]}>Envoyer ma demande</Text>
            </>
          )}
        </Pressable>

        <Text style={[styles.privacy, { color: colors.mutedForeground }]}>
          Vos données sont confidentielles et ne seront jamais partagées.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingBottom: 16 },
  headerTitle: { fontSize: 24, fontFamily: "Inter_700Bold", marginBottom: 2 },
  headerSub: { fontSize: 13, fontFamily: "Inter_400Regular" },
  form: { padding: 16, gap: 14 },
  stepCard: { padding: 16, borderWidth: 1 },
  stepHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 },
  stepNum: { width: 28, height: 28, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  stepNumText: { fontSize: 14, fontFamily: "Inter_700Bold" },
  stepTitle: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  label: { fontSize: 13, fontFamily: "Inter_500Medium", marginBottom: 6, marginTop: 10 },
  input: { borderWidth: 1.5, paddingHorizontal: 14, paddingVertical: 10, fontSize: 15, fontFamily: "Inter_400Regular" },
  row: { flexDirection: "row", gap: 10 },
  tripTypeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tripTypeBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1.5, minWidth: "45%", flex: 1 },
  tripTypeText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  budgetGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  budgetBtn: { padding: 12, borderWidth: 1.5, minWidth: "45%", flex: 1 },
  budgetLabel: { fontSize: 14, fontFamily: "Inter_600SemiBold", marginBottom: 2 },
  budgetDesc: { fontSize: 11, fontFamily: "Inter_400Regular" },
  submitBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, paddingVertical: 16, marginTop: 4 },
  submitText: { fontSize: 16, fontFamily: "Inter_700Bold" },
  privacy: { fontSize: 11, fontFamily: "Inter_400Regular", textAlign: "center" },
  successContainer: { flex: 1, alignItems: "center", justifyContent: "center", padding: 32 },
  successIcon: { width: 100, height: 100, borderRadius: 50, alignItems: "center", justifyContent: "center", marginBottom: 20 },
  successTitle: { fontSize: 24, fontFamily: "Inter_700Bold", marginBottom: 12, textAlign: "center" },
  successSub: { fontSize: 15, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 22, marginBottom: 32 },
  newBtn: { paddingVertical: 14, paddingHorizontal: 28 },
  newBtnText: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
});
