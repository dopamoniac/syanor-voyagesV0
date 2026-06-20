import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGetOffer } from "@workspace/api-client-react";

import { useColors } from "@/hooks/useColors";

export default function OfferDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const { data: offer, isLoading, isError, refetch } = useGetOffer(id ?? "");

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={[styles.hero, { paddingTop: topPad + 8, backgroundColor: colors.primary }]}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.ivory} />
          </Pressable>
        </View>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </View>
    );
  }

  if (isError || !offer) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={[styles.hero, { paddingTop: topPad + 8, backgroundColor: colors.primary }]}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.ivory} />
          </Pressable>
        </View>
        <View style={styles.centered}>
          <Ionicons name="wifi-outline" size={48} color={colors.muted} />
          <Text style={[styles.errorText, { color: colors.mutedForeground }]}>Offre introuvable</Text>
          <Pressable onPress={() => refetch()} style={[styles.retryBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
            <Text style={[styles.retryText, { color: colors.primaryForeground }]}>Réessayer</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.hero, { paddingTop: topPad + 8, backgroundColor: colors.primary }]}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={colors.ivory} />
        </Pressable>
        <View style={styles.heroBody}>
          <View style={[styles.badge, { backgroundColor: colors.accent }]}>
            <Text style={[styles.badgeText, { color: colors.ink }]}>
              {offer.category === "circuit" ? "Circuit" :
                offer.category === "sejour" ? "Séjour" :
                offer.category === "city-break" ? "City Break" : "Croisière"}
            </Text>
          </View>
          <Text style={[styles.title, { color: colors.ivory }]}>{offer.title}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location" size={14} color={colors.gold} />
            <Text style={[styles.locationText, { color: colors.champagne }]}>{offer.destination}</Text>
          </View>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color={colors.gold} />
            <Text style={[styles.ratingText, { color: colors.ivory }]}>{offer.rating} · {offer.reviews} avis</Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Platform.OS === "web" ? 34 : 100 }}
      >
        <View style={[styles.priceBar, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
          <View>
            <Text style={[styles.priceLabel, { color: colors.mutedForeground }]}>À partir de</Text>
            <Text style={[styles.priceValue, { color: colors.accent }]}>{offer.price.toLocaleString("fr-FR")} €</Text>
          </View>
          <View style={styles.metaPills}>
            <View style={[styles.pill, { backgroundColor: colors.muted }]}>
              <Ionicons name="time-outline" size={12} color={colors.mutedForeground} />
              <Text style={[styles.pillText, { color: colors.mutedForeground }]}>{offer.duration}</Text>
            </View>
            <View style={[styles.pill, { backgroundColor: colors.muted }]}>
              <Ionicons name="flag-outline" size={12} color={colors.mutedForeground} />
              <Text style={[styles.pillText, { color: colors.mutedForeground }]}>{offer.country}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Description</Text>
          <Text style={[styles.description, { color: colors.mutedForeground }]}>{offer.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Points forts</Text>
          {offer.highlights.map((h, i) => (
            <View key={i} style={styles.highlightRow}>
              <View style={[styles.dot, { backgroundColor: colors.accent }]} />
              <Text style={[styles.highlightText, { color: colors.foreground }]}>{h}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Dates de départ</Text>
          <View style={styles.departureGrid}>
            {offer.departures.map((d, i) => (
              <View key={i} style={[styles.departurePill, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
                <Ionicons name="calendar-outline" size={13} color={colors.primary} />
                <Text style={[styles.departureText, { color: colors.foreground }]}>{d}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 16 }}>
          <Pressable
            onPress={() => {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              router.push("/(tabs)/quote" as any);
            }}
            style={({ pressed }) => [
              styles.cta,
              { backgroundColor: colors.primary, borderRadius: colors.radius, opacity: pressed ? 0.88 : 1 },
            ]}
          >
            <Ionicons name="send-outline" size={18} color={colors.primaryForeground} />
            <Text style={[styles.ctaText, { color: colors.primaryForeground }]}>Demander un devis</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { paddingHorizontal: 20, paddingBottom: 24 },
  backBtn: { marginBottom: 16, width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  heroBody: {},
  badge: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 10 },
  badgeText: { fontSize: 11, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  title: { fontSize: 22, fontFamily: "Inter_700Bold", lineHeight: 28, marginBottom: 8 },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 6 },
  locationText: { fontSize: 13, fontFamily: "Inter_400Regular" },
  ratingRow: { flexDirection: "row", alignItems: "center", gap: 5 },
  ratingText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  centered: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  errorText: { fontSize: 15, fontFamily: "Inter_400Regular" },
  retryBtn: { paddingHorizontal: 20, paddingVertical: 10 },
  retryText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  priceBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 14, borderBottomWidth: 1 },
  priceLabel: { fontSize: 11, fontFamily: "Inter_400Regular" },
  priceValue: { fontSize: 24, fontFamily: "Inter_700Bold" },
  metaPills: { gap: 6, alignItems: "flex-end" },
  pill: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 },
  pillText: { fontSize: 11, fontFamily: "Inter_400Regular" },
  section: { paddingHorizontal: 20, paddingTop: 20 },
  sectionTitle: { fontSize: 17, fontFamily: "Inter_700Bold", marginBottom: 10 },
  description: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 22 },
  highlightRow: { flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, marginTop: 5 },
  highlightText: { fontSize: 14, fontFamily: "Inter_400Regular", flex: 1, lineHeight: 20 },
  departureGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  departurePill: { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 12, paddingVertical: 8 },
  departureText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  cta: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, paddingVertical: 16, marginTop: 24 },
  ctaText: { fontSize: 16, fontFamily: "Inter_700Bold" },
});
