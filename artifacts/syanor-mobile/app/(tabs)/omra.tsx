import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useListOmraPackages } from "@workspace/api-client-react";
import type { OmraPackage } from "@workspace/api-client-react";

import { useColors } from "@/hooks/useColors";

const TYPES = [
  { key: "all", label: "Tous" },
  { key: "economique", label: "Économique" },
  { key: "standard", label: "Standard" },
  { key: "premium", label: "Premium" },
  { key: "vip", label: "VIP" },
];

function Stars({ count }: { count: number }) {
  return (
    <View style={{ flexDirection: "row", gap: 1 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Ionicons key={i} name={i < count ? "star" : "star-outline"} size={11} color="#c9a24a" />
      ))}
    </View>
  );
}

function TypeBadge({ type, colors }: { type: OmraPackage["type"]; colors: ReturnType<typeof useColors> }) {
  const config = {
    economique: { label: "Économique", bg: colors.muted, fg: colors.foreground },
    standard: { label: "Standard", bg: colors.primary, fg: colors.primaryForeground },
    premium: { label: "Premium", bg: colors.accent, fg: colors.ink },
    vip: { label: "VIP Exclusif", bg: colors.royal, fg: colors.gold },
  }[type];

  return (
    <View style={[styles.typeBadge, { backgroundColor: config.bg }]}>
      <Text style={[styles.typeBadgeText, { color: config.fg }]}>{config.label}</Text>
    </View>
  );
}

function PackageCard({ pkg, colors }: { pkg: OmraPackage; colors: ReturnType<typeof useColors> }) {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        router.push(`/omra/${pkg.id}` as any);
      }}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          borderRadius: colors.radius,
          opacity: pressed ? 0.88 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
    >
      <View style={styles.cardTop}>
        <TypeBadge type={pkg.type} colors={colors} />
        <Text style={[styles.departCity, { color: colors.mutedForeground }]}>
          {pkg.departure_city}
        </Text>
      </View>

      <Text style={[styles.cardTitle, { color: colors.foreground }]}>{pkg.title}</Text>

      <View style={styles.durationRow}>
        <Ionicons name="moon-outline" size={14} color={colors.mutedForeground} />
        <Text style={[styles.durationText, { color: colors.mutedForeground }]}>{pkg.duration}</Text>
      </View>

      <View style={[styles.hotelsBox, { backgroundColor: colors.muted, borderRadius: colors.radius - 4 }]}>
        <View style={styles.hotelRow}>
          <MaterialCommunityIcons name="star-crescent" size={14} color={colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.hotelCity, { color: colors.mutedForeground }]}>La Mecque — {pkg.nights_mecca} nuits</Text>
            <Text style={[styles.hotelName, { color: colors.foreground }]} numberOfLines={1}>{pkg.hotel_mecca}</Text>
          </View>
          <Stars count={pkg.stars_mecca} />
        </View>
        <View style={[styles.separator, { backgroundColor: colors.border }]} />
        <View style={styles.hotelRow}>
          <Ionicons name="business-outline" size={14} color={colors.primary} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.hotelCity, { color: colors.mutedForeground }]}>Médine — {pkg.nights_medina} nuits</Text>
            <Text style={[styles.hotelName, { color: colors.foreground }]} numberOfLines={1}>{pkg.hotel_medina}</Text>
          </View>
          <Stars count={pkg.stars_medina} />
        </View>
      </View>

      <View style={styles.departuresRow}>
        <Ionicons name="calendar-outline" size={13} color={colors.mutedForeground} />
        <Text style={[styles.departuresText, { color: colors.mutedForeground }]}>
          {pkg.departures.slice(0, 3).join(" · ")}{pkg.departures.length > 3 ? " …" : ""}
        </Text>
      </View>

      <View style={styles.cardFooter}>
        <View>
          <Text style={[styles.priceFrom, { color: colors.mutedForeground }]}>À partir de</Text>
          <Text style={[styles.price, { color: colors.accent }]}>{pkg.price.toLocaleString("fr-FR")} €</Text>
        </View>
        <View style={[styles.cta, { backgroundColor: colors.primary, borderRadius: colors.radius - 4 }]}>
          <Text style={[styles.ctaText, { color: colors.primaryForeground }]}>Détails</Text>
          <Ionicons name="arrow-forward" size={14} color={colors.primaryForeground} />
        </View>
      </View>
    </Pressable>
  );
}

export default function OmraScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [activeType, setActiveType] = useState("all");

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const { data: packages, isLoading, isError, refetch } = useListOmraPackages();

  const filtered = !packages ? [] : activeType === "all"
    ? packages
    : packages.filter((p) => p.type === activeType);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.royal }]}>
        <View style={styles.headerInner}>
          <MaterialCommunityIcons name="star-crescent" size={32} color={colors.gold} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.headerTitle, { color: colors.ivory }]}>Omra Factory</Text>
            <Text style={[styles.headerSub, { color: colors.champagne }]}>Pèlerinages & Hajj depuis la France</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={TYPES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.key}
        contentContainerStyle={styles.filterList}
        style={{ backgroundColor: colors.royal, paddingBottom: 14 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              Haptics.selectionAsync();
              setActiveType(item.key);
            }}
            style={[
              styles.filterChip,
              activeType === item.key
                ? { backgroundColor: colors.gold }
                : { backgroundColor: "rgba(255,255,255,0.12)" },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: activeType === item.key ? colors.ink : colors.ivory },
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        )}
      />

      {isLoading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.royal} />
          <Text style={[styles.loadingText, { color: colors.mutedForeground }]}>Chargement des packages…</Text>
        </View>
      ) : isError ? (
        <View style={styles.centered}>
          <MaterialCommunityIcons name="star-crescent" size={48} color={colors.muted} />
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Impossible de charger les packages</Text>
          <Pressable onPress={() => refetch()} style={[styles.retryBtn, { backgroundColor: colors.royal, borderRadius: colors.radius }]}>
            <Text style={[styles.retryText, { color: colors.ivory }]}>Réessayer</Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            styles.list,
            { paddingBottom: Platform.OS === "web" ? 34 : 100 },
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PackageCard pkg={item} colors={colors} />}
          ListEmptyComponent={
            <View style={styles.centered}>
              <MaterialCommunityIcons name="star-crescent" size={48} color={colors.muted} />
              <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Aucun package dans cette catégorie</Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  headerInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    marginBottom: 2,
  },
  headerSub: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
  filterList: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
  },
  list: {
    padding: 16,
    gap: 14,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    gap: 12,
  },
  loadingText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  emptyText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    paddingHorizontal: 24,
  },
  retryBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 4,
  },
  retryText: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  card: {
    borderWidth: 1,
    padding: 16,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  typeBadgeText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  departCity: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    marginBottom: 6,
  },
  durationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 12,
  },
  durationText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
  hotelsBox: {
    padding: 12,
    marginBottom: 12,
  },
  hotelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  hotelCity: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
  },
  hotelName: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
  separator: {
    height: 1,
    marginVertical: 8,
  },
  departuresRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 14,
  },
  departuresText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    flex: 1,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceFrom: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
  },
  price: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  ctaText: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
});
