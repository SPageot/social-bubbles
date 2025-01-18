import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from "react";
import { ToastProvider } from "expo-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider mode="light">
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </GluestackUIProvider>
      </QueryClientProvider>
    </ToastProvider>
  );
}
