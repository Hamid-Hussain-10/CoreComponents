import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const Scrollable = () => (
  <ScrollView
    contentContainerStyle={{ padding: 20, backgroundColor: '#4d9704',  }}
    showsVerticalScrollIndicator={false}
    onScroll={({ nativeEvent }) => {
      console.log('Scrolling...', nativeEvent.contentOffset.y);
    }}
    pagingEnabled
  >
    {[...Array(20)].map((_, i) => (
      <View key={i} style={{ marginBottom: 20 }}>
        <Text>Item {i + 1}</Text>
      </View>
    ))}
  </ScrollView>
);
export default Scrollable;
