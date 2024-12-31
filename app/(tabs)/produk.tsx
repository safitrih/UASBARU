import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductList() {
  const products = [
    {
      id: '1',
      name: 'Coca-Cola 1L',
      price: 'Rp 10,000',
      stock: 25,
      image: 'https://tse1.mm.bing.net/th?id=OIP.O0XxJZ3unN2o8y0bUdbAXwHaHa&w=474&h=474&c=7',
    },
    {
      id: '2',
      name: 'Indomie Goreng',
      price: 'Rp 3,500',
      stock: 100,
      image: 'https://tse4.mm.bing.net/th?id=OIP.Frpo8nQqupRlWZdlfUwYZwHaE8&w=316&h=316&c=7',
    },
    {
      id: '3',
      name: 'Dettol Hand Wash',
      price: 'Rp 25,000',
      stock: 15,
      image: 'https://tse3.mm.bing.net/th?id=OIP.oyySvnHKkmyOYzdZknCXmwHaHa&w=474&h=474&c=7',
    },
    {
      id: '4',
      name: 'KitKat Bar',
      price: 'Rp 8,000',
      stock: 40,
      image: 'https://tse1.mm.bing.net/th?id=OIP.jxrZPFhCGVIvsDPxIxhZrwHaHa&w=474&h=474&c=7',
    },
    {
      id: '5',
      name: 'Sunlight Dishwashing Liquid',
      price: 'Rp 12,000',
      stock: 20,
      image: 'https://tse3.mm.bing.net/th?id=OIP.aej71TvsKwvDCTUcQd7gjQHaHa&w=474&h=474&c=7',
    },
    {
      id: '6',
      name: 'Aqua 600ml',
      price: 'Rp 4,000',
      stock: 50,
      image: 'https://tse1.mm.bing.net/th?id=OIP.4xJvlSakMKWzXZCHg3XGEAHaHa&w=474&h=474&c=7',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mini-Market Products</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.productStock}>Stock: {item.stock}</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity style={[styles.actionButton, styles.editButton]}>
                  <Ionicons name="pencil-outline" size={18} color="#FFFFFF" />
                  <Text style={styles.actionText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
                  <Ionicons name="trash-outline" size={18} color="#FFFFFF" />
                  <Text style={styles.actionText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.productList}
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
  productList: {
    padding: 16,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
    flexDirection: 'row',
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginVertical: 4,
  },
  productStock: {
    fontSize: 12,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  editButton: {
    backgroundColor: '#1E88E5', // Blue for Edit
  },
  deleteButton: {
    backgroundColor: '#F44336', // Red for Delete
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 4,
  },
});
