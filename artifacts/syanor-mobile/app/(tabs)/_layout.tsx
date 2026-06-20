import { BlurView } from "expo-blur";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { SymbolView } from "expo-symbols";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";

import { useColors } from "@/hooks/useColors";

function NativeTabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf={{ default: "house", selected: "house.fill" }} />
        <Label>Accueil</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="offers">
        <Icon sf={{ default: "paperplane", selected: "paperplane.fill" }} />
        <Label>Voyages</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="omra">
        <Icon sf={{ default: "moon", selected: "moon.fill" }} />
        <Label>Omra</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="quote">
        <Icon sf={{ default: "envelope", selected: "envelope.fill" }} />
        <Label>Devis</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function ClassicTabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.background,
          borderTopWidth: isWeb ? 1 : 0,
          borderTopColor: colors.border,
          elevation: 0,
          ...(isWeb ? { height: 84 } : {}),
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView
              intensity={100}
              tint={isDark ? "dark" : "light"}
              style={StyleSheet.absoluteFill}
            />
          ) : isWeb ? (
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: colors.background },
              ]}
            />
          ) : null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="house" tintColor={color} size={24} />
            ) : (
              <Feather name="home" size={22} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: "Voyages",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="airplane" tintColor={color} size={24} />
            ) : (
              <Ionicons name="airplane-outline" size={22} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="omra"
        options={{
          title: "Omra",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="moon" tintColor={color} size={24} />
            ) : (
              <Ionicons name="moon-outline" size={22} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="quote"
        options={{
          title: "Devis",
          tabBarIcon: ({ color }) =>
            isIOS ? (
              <SymbolView name="envelope" tintColor={color} size={24} />
            ) : (
              <Ionicons name="mail-outline" size={22} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  if (isLiquidGlassAvailable()) {
    return <NativeTabLayout />;
  }
  return <ClassicTabLayout />;
}
