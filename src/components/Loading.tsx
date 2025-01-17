import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

type LoadingProps = {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
};

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', size = 'large', color = '#6200ee' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Loading;
