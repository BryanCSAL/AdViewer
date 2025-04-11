import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Ad from './components/ad/calca';
import Ad1 from './components/ad/blusa';
import Ad3 from './components/ad/calcinha';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
        Anúncios
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          alignItems: 'center'
        }}
      >
        <Ad
          style={{ backgroundColor: 'black', marginRight: 10 }}
          textStyle={{ fontSize: 20 }}
        />
        <Ad1
          style={{ backgroundColor: 'black', marginRight: 10 }}
          textStyle={{ fontSize: 20 }}
        />
        <Ad3
          style={{ backgroundColor: 'black', marginRight: 10 }}
          textStyle={{ fontSize: 20 }}
        />
      </ScrollView>
    </View>
  );
}
