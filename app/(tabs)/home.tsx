import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CashierHome() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, Cashier!</Text>
        <Text style={styles.headerSubtitle}>Today: {new Date().toLocaleDateString()}</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={[styles.actionButton, styles.newSale]}>
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          <Text style={styles.actionText}>New Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.inventoryCheck]}>
          <Ionicons name="cube-outline" size={24} color="#FFFFFF" />
          <Text style={styles.actionText}>Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.reports]}>
          <Ionicons name="document-text-outline" size={24} color="#FFFFFF" />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>
      </View>

      {/* Summary Section */}
      <View style={styles.summarySection}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Total Sales</Text>
          <Text style={styles.summaryValue}>Rp 5,000,000</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Customers Served</Text>
          <Text style={styles.summaryValue}>150</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Items Sold</Text>
          <Text style={styles.summaryValue}>300</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background
  },
  header: {
    backgroundColor: '#4CAF50', // Green header
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E8F5E9', // Light green for subtitle text
    marginTop: 8,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Wrap buttons on smaller screens
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    minWidth: '30%', // Ensures buttons are not too small
  },
  newSale: {
    backgroundColor: '#4CAF50', // Green for New Sale
  },
  inventoryCheck: {
    backgroundColor: '#1E88E5', // Blue for Inventory
  },
  reports: {
    backgroundColor: '#FF9800', // Orange for Reports
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4, // Space between icon and text
    textAlign: 'center',
  },
  summarySection: {
    paddingHorizontal: 16,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Light gray border
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888', // Subtle gray for titles
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E88E5', // Blue for highlighted values
    marginTop: 8,
  },
});
