import { Ionicons } from "@expo/vector-icons";
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
import { useListOffers } from "@workspace/api-client-react";
import type { TravelOffer } from "@workspace/api-client-react";

import { useColors } from "@/hooks/useColors";

const CATEGORIES = [
  { key: "all", label: "Tous" },
  { key: "circuit", label: "Circuits" },
  { key: "sejour", label: "Séjours" },
  { key: "city-break", label: "City Break" },
  { key: "croisiere", label: "Croisières" },
];

function StarRating({ rating, colors }: { rating: number; colors: ReturnType<typeof useColors> }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      <Ionicons name="star" size={12} color={colors.gold} />
      <Text style={{ fontSize: 12, fontFamily: "Inter_600SemiBold", color: colors.foreground }}>{rating.toFixed(1)}</Text>
    </View>
  );
}

function OfferCard({ offer, colors }: { offer: TravelOffer; colors: ReturnType<typeof useColors> }) {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        router.push(`/offer/${offer.id}` as any);
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
      <View style={styles.cardTopRow}>
        <View style={[styles.categoryBadge, { backgroundColor: colors.muted }]}>
          <Text style={[styles.categoryText, { color: colors.primary }]}>
            {offer.category === "circuit" ? "Circuit" :
              offer.category === "sejour" ? "Séjour" :
              offer.category === "city-break" ? "City Break" : "Croisière"}
          </Text>
        </View>
        <StarRating rating={offer.rating} colors={colors} />
      </View>

      <View style={[styles.destinationHeader, { backgroundColor: colors.primary }]}>
        <Ionicons name="location" size={16} color={colors.gold} />
        <Text style={[styles.destinationText, { color: colors.ivory }]} numberOfLines={1}>
          {offer.destination}
        </Text>
      </View>

      <Text style={[styles.cardTitle, { color: colors.foreground }]} numberOfLines={2}>
        {offer.title}
      </Text>

      <View style={styles.cardMeta}>
        <View style={styles.metaItem}>
          <Ionicons name="time-outline" size={14} color={colors.mutedForeground} />
          <Text style={[styles.metaText, { color: colors.mutedForeground }]}>{offer.duration}</Text>
        </View>
        <View style={styles.metaItem}>
          <Ionicons name="calendar-outline" size={14} color={colors.mutedForeground} />
          <Text style={[styles.metaText, { color: colors.mutedForeground }]}>{offer.departures[0]}{offer.departures.length > 1 ? " +" : ""}</Text>
        </View>
      </View>

      <View style={styles.highlights}>
        {offer.highlights.slice(0, 3).map((h, i) => (
          <View key={i} style={[styles.highlight, { backgroundColor: colors.muted }]}>
            <Text style={[styles.highlightText, { color: colors.foreground }]} numberOfLines={1}>{h}</Text>
          </View>
        ))}
      </View>

      <View style={styles.cardFooter}>
        <View>
          <Text style={[styles.priceFrom, { color: colors.mutedForeground }]}>À partir de</Text>
          <Text style={[styles.price, { color: colors.accent }]}>{offer.price.toLocaleString("fr-FR")} €</Text>
        </View>
        <View style={[styles.cta, { backgroundColor: colors.primary, borderRadius: colors.radius - 4 }]}>
          <Text style={[styles.ctaText, { color: colors.primaryForeground }]}>Voir</Text>
          <Ionicons name="arrow-forward" size={14} color={colors.primaryForeground} />
        </View>
      </View>
    </Pressable>
  );
}

export default function OffersScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState("all");

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const { data: offers, isLoading, isError, refetch } = useListOffers();

  const filtered = !offers ? [] : activeCategory === "all"
    ? offers
    : offers.filter((o) => o.category === activeCategory);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.ivory }]}>Nos Voyages</Text>
        <Text style={[styles.headerSub, { color: colors.champagne }]}>Circuits & séjours de rêve</Text>
      </View>

      <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.key}
        contentContainerStyle={styles.filterList}
        style={{ backgroundColor: colors.primary, paddingBottom: 14 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              Haptics.selectionAsync();
              setActiveCategory(item.key);
            }}
            style={[
              styles.filterChip,
              activeCategory === item.key
                ? { backgroundColor: colors.accent }
                : { backgroundColor: "rgba(255,255,255,0.12)" },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: activeCategory === item.key ? colors.ink : colors.ivory },
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        )}
      />

      {isLoading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.mutedForeground }]}>Chargement des offres…</Text>
        </View>
      ) : isError ? (
        <View style={styles.centered}>
          <Ionicons name="wifi-outline" size={48} color={colors.muted} />
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Impossible de charger les offres</Text>
          <Pressable onPress={() => refetch()} style={[styles.retryBtn, { backgroundColor: colors.primary, borderRadius: colors.radius }]}>
            <Text style={[styles.retryText, { color: colors.primaryForeground }]}>Réessayer</Text>
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
          renderItem={({ item }) => <OfferCard offer={item} colors={colors} />}
          ListEmptyComponent={
            <View style={styles.centered}>
              <Ionicons name="airplane-outline" size={48} color={colors.muted} />
              <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Aucune offre dans cette catégorie</Text>
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
  headerTitle: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    marginBottom: 2,
  },
  headerSub: {
    fontSize: 13,
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
    overflow: "hidden",
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  destinationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    marginBottom: 10,
  },
  destinationText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: "Inter_700Bold",
    lineHeight: 23,
    marginBottom: 10,
  },
  cardMeta: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
  highlights: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 14,
  },
  highlight: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  highlightText: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
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
