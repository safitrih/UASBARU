import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF4500', // Warna ikon saat aktif
        tabBarInactiveTintColor: '#808080', // Warna ikon saat tidak aktif
      }}
    >
      {/* Halaman Home dengan Tab Navigasi */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          title: 'Home', // Menyesuaikan judul tab
        }}
      />
    </Tabs>
  );
};