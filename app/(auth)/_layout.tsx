import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function UserLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      <Tabs.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
}
