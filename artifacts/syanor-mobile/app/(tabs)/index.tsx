import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useListOffers, useListOmraPackages } from "@workspace/api-client-react";
import type { TravelOffer } from "@workspace/api-client-react";

import { useColors } from "@/hooks/useColors";

const { width } = Dimensions.get("window");

function FeatureCard({
  icon,
  label,
  sublabel,
  onPress,
  colors,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  onPress: () => void;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.featureCard,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          opacity: pressed ? 0.85 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
      ]}
    >
      <View style={[styles.featureIconWrap, { backgroundColor: colors.muted }]}>
        {icon}
      </View>
      <Text style={[styles.featureLabel, { color: colors.foreground }]}>{label}</Text>
      <Text style={[styles.featureSub, { color: colors.mutedForeground }]}>{sublabel}</Text>
    </Pressable>
  );
}

function OfferMiniCard({
  offer,
  onPress,
  colors,
}: {
  offer: TravelOffer;
  onPress: () => void;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.miniCard,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      <View style={[styles.miniCardBadge, { backgroundColor: colors.primary }]}>
        <Ionicons name="airplane" size={14} color={colors.primaryForeground} />
      </View>
      <Text style={[styles.miniCardTitle, { color: colors.foreground }]} numberOfLines={2}>{offer.title}</Text>
      <Text style={[styles.miniCardSub, { color: colors.mutedForeground }]}>{offer.country} • {offer.duration}</Text>
      <Text style={[styles.miniCardPrice, { color: colors.accent }]}>À partir de {offer.price}€</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const { data: offers, isLoading: offersLoading } = useListOffers();
  const { data: omraPackages } = useListOmraPackages();

  const handleNav = (tab: string) => {
    Haptics.selectionAsync();
    router.push(tab as any);
  };

  const featuredOffers = offers?.slice(0, 4) ?? [];
  const omraCount = omraPackages?.length ?? 4;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingBottom: Platform.OS === "web" ? 34 : 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={[styles.hero, { paddingTop: topPad + 20, backgroundColor: colors.primary }]}>
        <View style={styles.heroContent}>
          <Text style={[styles.heroEyebrow, { color: colors.gold }]}>Bienvenue chez</Text>
          <Text style={[styles.heroTitle, { color: colors.ivory }]}>SYANOR VOYAGES</Text>
          <Text style={[styles.heroSub, { color: colors.champagne }]}>
            Voyages sur mesure · Omra & Hajj · Depuis la France
          </Text>
        </View>
        <View style={styles.heroDecor}>
          <MaterialCommunityIcons name="star-crescent" size={80} color="rgba(201,162,74,0.15)" />
        </View>
      </View>

      {/* Gold bar */}
      <View style={[styles.goldBar, { backgroundColor: colors.accent }]}>
        <Ionicons name="call-outline" size={14} color={colors.ink} />
        <Text style={[styles.goldBarText, { color: colors.ink }]}>  Conseil gratuit : +33 1 23 45 67 89</Text>
      </View>

      {/* Feature cards */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Nos espaces</Text>
        <View style={styles.featureRow}>
          <FeatureCard
            icon={<Ionicons name="airplane" size={26} color={colors.primary} />}
            label="Agence Voyages"
            sublabel="Circuits & séjours"
            onPress={() => handleNav("/(tabs)/offers")}
            colors={colors}
          />
          <FeatureCard
            icon={<MaterialCommunityIcons name="star-crescent" size={26} color={colors.primary} />}
            label="Omra Factory"
            sublabel="Pèlerinage & Hajj"
            onPress={() => handleNav("/(tabs)/omra")}
            colors={colors}
          />
        </View>
      </View>

      {/* Quick quote CTA */}
      <Pressable
        onPress={() => handleNav("/(tabs)/quote")}
        style={({ pressed }) => [
          styles.quoteCTA,
          {
            backgroundColor: colors.primary,
            opacity: pressed ? 0.88 : 1,
            marginHorizontal: 16,
            borderRadius: colors.radius,
          },
        ]}
      >
        <View style={styles.quoteCTAInner}>
          <View>
            <Text style={[styles.quoteCTATitle, { color: colors.primaryForeground }]}>
              Demander un devis
            </Text>
            <Text style={[styles.quoteCTASub, { color: colors.champagne }]}>
              Réponse sous 24h · Sur mesure
            </Text>
          </View>
          <View style={[styles.quoteCTABtn, { backgroundColor: colors.accent }]}>
            <Ionicons name="arrow-forward" size={20} color={colors.ink} />
          </View>
        </View>
      </Pressable>

      {/* Featured offers */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Offres à la une</Text>
          <Pressable onPress={() => handleNav("/(tabs)/offers")}>
            <Text style={[styles.seeAll, { color: colors.accent }]}>Voir tout</Text>
          </Pressable>
        </View>
        {offersLoading ? (
          <ActivityIndicator color={colors.primary} style={{ paddingVertical: 20 }} />
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
          >
            {featuredOffers.map((offer) => (
              <OfferMiniCard
                key={offer.id}
                offer={offer}
                onPress={() => {
                  Haptics.selectionAsync();
                  router.push(`/offer/${offer.id}` as any);
                }}
                colors={colors}
              />
            ))}
          </ScrollView>
        )}
      </View>

      {/* Omra teaser */}
      <Pressable
        onPress={() => handleNav("/(tabs)/omra")}
        style={({ pressed }) => [
          styles.omraTeaser,
          {
            marginHorizontal: 16,
            borderRadius: colors.radius,
            backgroundColor: colors.royal,
            opacity: pressed ? 0.9 : 1,
          },
        ]}
      >
        <MaterialCommunityIcons name="star-crescent" size={40} color={colors.gold} style={{ marginBottom: 10 }} />
        <Text style={[styles.omraTeaserTitle, { color: colors.ivory }]}>Omra Factory</Text>
        <Text style={[styles.omraTeaserSub, { color: colors.champagne }]}>
          Packages Omra et Hajj au départ de toute la France
        </Text>
        <View style={[styles.omraTeaserBadge, { backgroundColor: colors.gold }]}>
          <Text style={[styles.omraTeaserBadgeText, { color: colors.ink }]}>{omraCount} formules disponibles</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    overflow: "hidden",
    position: "relative",
  },
  heroContent: {
    zIndex: 2,
  },
  heroEyebrow: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  heroSub: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    opacity: 0.9,
  },
  heroDecor: {
    position: "absolute",
    right: 20,
    bottom: 20,
    opacity: 0.7,
  },
  goldBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  goldBarText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  seeAll: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
  },
  featureRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 12,
  },
  featureCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    alignItems: "center",
  },
  featureIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  featureLabel: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    textAlign: "center",
    marginBottom: 3,
  },
  featureSub: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  quoteCTA: {
    padding: 18,
    marginTop: 8,
  },
  quoteCTAInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quoteCTATitle: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginBottom: 3,
  },
  quoteCTASub: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
  quoteCTABtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  miniCard: {
    width: 160,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
  },
  miniCardBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  miniCardTitle: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
    lineHeight: 18,
    marginBottom: 4,
  },
  miniCardSub: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    marginBottom: 6,
  },
  miniCardPrice: {
    fontSize: 12,
    fontFamily: "Inter_700Bold",
  },
  omraTeaser: {
    marginTop: 24,
    padding: 24,
    alignItems: "center",
    marginBottom: 8,
  },
  omraTeaserTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  omraTeaserSub: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 16,
  },
  omraTeaserBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  omraTeaserBadgeText: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
});
