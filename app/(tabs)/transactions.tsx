import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TransactionScreen() {
  const transactions = [
    {
      id: '1',
      date: '2024-12-24',
      time: '10:30 AM',
      total: 150000,
      status: 'Completed',
      items: [
        { name: 'Coca-Cola 1L', quantity: 2, price: 10000 },
        { name: 'Indomie Goreng', quantity: 3, price: 3500 },
      ],
    },
    {
      id: '2',
      date: '2024-12-24',
      time: '11:45 AM',
      total: 75000,
      status: 'Pending',
      items: [
        { name: 'KitKat Bar', quantity: 5, price: 8000 },
        { name: 'Sunlight Dishwashing', quantity: 1, price: 12000 },
      ],
    },
    {
      id: '3',
      date: '2024-12-23',
      time: '3:15 PM',
      total: 45000,
      status: 'Completed',
      items: [
        { name: 'Aqua 600ml', quantity: 10, price: 4000 },
      ],
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return styles.completedStatus;
      case 'Pending':
        return styles.pendingStatus;
      default:
        return styles.defaultStatus;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transactions</Text>
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionCard}>
            <View style={styles.transactionHeader}>
              <Text style={styles.transactionDate}>
                {item.date} at {item.time}
              </Text>
              <Text style={[styles.transactionStatus, getStatusStyle(item.status)]}>
                {item.status}
              </Text>
            </View>
            <View style={styles.transactionDetails}>
              <FlatList
                data={item.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <Text style={styles.transactionItem}>
                    {item.quantity} x {item.name} - Rp {item.price.toLocaleString()}
                  </Text>
                )}
              />
            </View>
            <Text style={styles.transactionTotal}>
              Total: Rp {item.total.toLocaleString()}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.transactionList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 16,
  },
  transactionList: {
    padding: 16,
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
  },
  transactionStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    color: '#FFFFFF',
  },
  completedStatus: {
    backgroundColor: '#4CAF50',
  },
  pendingStatus: {
    backgroundColor: '#FF9800',
  },
  defaultStatus: {
    backgroundColor: '#888',
  },
  transactionDetails: {
    marginVertical: 8,
  },
  transactionItem: {
    fontSize: 14,
    color: '#333',
  },
  transactionTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    textAlign: 'right',
  },
});
