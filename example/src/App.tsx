import { allCountries, WorldMap } from 'pingvi-simple-worldmap';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  console.log(allCountries);

  const handleSelect = (countries: string[]) => {
    setSelectedCountries(countries);
    console.log(selectedCountries);
  };

  return (
    <View style={styles.container}>
      <WorldMap
        color="#8b2ab1"
        isSelectable={true}
        customColors={{
          RU: '#15ff00',
          US: '#15ff00',
        }}
        selectedColor={'#ff0303'}
        onSelect={handleSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
