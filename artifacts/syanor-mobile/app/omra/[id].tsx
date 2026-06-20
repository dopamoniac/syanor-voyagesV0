import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
import { useGetOmraPackage } from "@workspace/api-client-react";
import type { OmraPackage } from "@workspace/api-client-react";

import { useColors } from "@/hooks/useColors";

function Stars({ count }: { count: number }) {
  return (
    <View style={{ flexDirection: "row", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Ionicons key={i} name={i < count ? "star" : "star-outline"} size={13} color="#c9a24a" />
      ))}
    </View>
  );
}

export default function OmraDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const { data: pkg, isLoading, isError, refetch } = useGetOmraPackage(id ?? "");

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={[styles.hero, { paddingTop: topPad + 8, backgroundColor: colors.royal }]}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.ivory} />
          </Pressable>
        </View>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.royal} />
        </View>
      </View>
    );
  }

  if (isError || !pkg) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={[styles.hero, { paddingTop: topPad + 8, backgroundColor: colors.royal }]}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color={colors.ivory} />
          </Pressable>
        </View>
        <View style={styles.centered}>
          <MaterialCommunityIcons name="star-crescent" size={48} color={colors.muted} />
          <Text style={[styles.errorText, { color: colors.mutedForeground }]}>Package introuvable</Text>
          <Pressable onPress={() => refetch()} style={[styles.retryBtn, { backgroundColor: colors.royal, borderRadius: colors.radius }]}>
            <Text style={[styles.retryText, { color: colors.ivory }]}>Réessayer</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const typeColors: Record<OmraPackage["type"], { bg: string; fg: string }> = {
    economique: { bg: colors.muted, fg: colors.foreground },
    standard: { bg: colors.primary, fg: colors.primaryForeground },
    premium: { bg: colors.accent, fg: colors.ink },
    vip: { bg: colors.royal, fg: colors.gold },
  };
  const tc = typeColors[pkg.type];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.hero, { paddingTop: topPad + 8, backgroundColor: colors.royal }]}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={colors.ivory} />
        </Pressable>
        <View style={styles.heroBody}>
          <MaterialCommunityIcons name="star-crescent" size={36} color={colors.gold} style={{ marginBottom: 8 }} />
          <View style={[styles.typeBadge, { backgroundColor: tc.bg }]}>
            <Text style={[styles.typeBadgeText, { color: tc.fg }]}>
              {pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)}
            </Text>
          </View>
          <Text style={[styles.title, { color: colors.ivory }]}>{pkg.title}</Text>
          <View style={styles.durationRow}>
            <Ionicons name="moon-outline" size={14} color={colors.champagne} />
            <Text style={[styles.durationText, { color: colors.champagne }]}>{pkg.duration}</Text>
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
            <Text style={[styles.priceValue, { color: colors.accent }]}>{pkg.price.toLocaleString("fr-FR")} €</Text>
          </View>
          <View style={[styles.departPill, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
            <Ionicons name="airplane-outline" size={13} color={colors.primary} />
            <Text style={[styles.departText, { color: colors.foreground }]}>{pkg.departure_city}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Hébergements</Text>
          <View style={[styles.hotelsBox, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
            <View style={styles.hotelItem}>
              <View style={[styles.hotelIcon, { backgroundColor: colors.muted }]}>
                <MaterialCommunityIcons name="star-crescent" size={18} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.hotelCity, { color: colors.mutedForeground }]}>La Mecque · {pkg.nights_mecca} nuits</Text>
                <Text style={[styles.hotelName, { color: colors.foreground }]}>{pkg.hotel_mecca}</Text>
                <Stars count={pkg.stars_mecca} />
              </View>
            </View>
            <View style={[styles.separator, { backgroundColor: colors.border }]} />
            <View style={styles.hotelItem}>
              <View style={[styles.hotelIcon, { backgroundColor: colors.muted }]}>
                <Ionicons name="business-outline" size={18} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.hotelCity, { color: colors.mutedForeground }]}>Médine · {pkg.nights_medina} nuits</Text>
                <Text style={[styles.hotelName, { color: colors.foreground }]}>{pkg.hotel_medina}</Text>
                <Stars count={pkg.stars_medina} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Description</Text>
          <Text style={[styles.description, { color: colors.mutedForeground }]}>{pkg.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Inclus dans le package</Text>
          {pkg.includes.map((inc, i) => (
            <View key={i} style={styles.includeRow}>
              <Ionicons name="checkmark-circle" size={18} color={colors.primary} />
              <Text style={[styles.includeText, { color: colors.foreground }]}>{inc}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Dates de départ disponibles</Text>
          <View style={styles.departureGrid}>
            {pkg.departures.map((d, i) => (
              <View key={i} style={[styles.departurePill, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
                <Ionicons name="calendar-outline" size={13} color={colors.primary} />
                <Text style={[styles.departureText2, { color: colors.foreground }]}>{d}</Text>
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
              { backgroundColor: colors.royal, borderRadius: colors.radius, opacity: pressed ? 0.88 : 1 },
            ]}
          >
            <MaterialCommunityIcons name="star-crescent" size={18} color={colors.gold} />
            <Text style={[styles.ctaText, { color: colors.ivory }]}>Demander un devis Omra</Text>
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
  typeBadge: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 10 },
  typeBadgeText: { fontSize: 11, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  title: { fontSize: 22, fontFamily: "Inter_700Bold", lineHeight: 28, marginBottom: 8 },
  durationRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  durationText: { fontSize: 13, fontFamily: "Inter_400Regular" },
  centered: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  errorText: { fontSize: 15, fontFamily: "Inter_400Regular" },
  retryBtn: { paddingHorizontal: 20, paddingVertical: 10 },
  retryText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  priceBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 14, borderBottomWidth: 1 },
  priceLabel: { fontSize: 11, fontFamily: "Inter_400Regular" },
  priceValue: { fontSize: 24, fontFamily: "Inter_700Bold" },
  departPill: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 12, paddingVertical: 8 },
  departText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  section: { paddingHorizontal: 20, paddingTop: 20 },
  sectionTitle: { fontSize: 17, fontFamily: "Inter_700Bold", marginBottom: 12 },
  hotelsBox: { borderWidth: 1, padding: 16 },
  hotelItem: { flexDirection: "row", gap: 12, alignItems: "flex-start" },
  hotelIcon: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  hotelCity: { fontSize: 11, fontFamily: "Inter_400Regular", marginBottom: 2 },
  hotelName: { fontSize: 14, fontFamily: "Inter_600SemiBold", marginBottom: 4 },
  separator: { height: 1, marginVertical: 14 },
  description: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 22 },
  includeRow: { flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 10 },
  includeText: { fontSize: 14, fontFamily: "Inter_400Regular", flex: 1, lineHeight: 20 },
  departureGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  departurePill: { flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 12, paddingVertical: 8 },
  departureText2: { fontSize: 13, fontFamily: "Inter_500Medium" },
  cta: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, paddingVertical: 16, marginTop: 24 },
  ctaText: { fontSize: 16, fontFamily: "Inter_700Bold" },
});
