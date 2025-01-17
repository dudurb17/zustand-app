import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(()=>{
    router.replace('/sign-in')
  }, [])
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
