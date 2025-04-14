import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Text style={styles.contentText}>Welcome to the Home Page!</Text>;
      case 'About':
        return <Text style={styles.contentText}>This is the About Page.</Text>;
      case 'Services':
        return <Text style={styles.contentText}>These are our Services.</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
          onPress={() => setActiveTab('Home')}
        >
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'About' && styles.activeTab]}
          onPress={() => setActiveTab('About')}
        >
          <Text style={styles.tabText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Services' && styles.activeTab]}
          onPress={() => setActiveTab('Services')}
        >
          <Text style={styles.tabText}>Services</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#6200ee',
  },
  tabText: {
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;