import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface SelectedValueDisplayProps {
  value: string | null;
}

const SelectedValueDisplay: React.FC<SelectedValueDisplayProps> = ({value}) => {
  if (!value) return null;

  return <Text style={styles.selectedValue}> {value}</Text>;
};

const styles = StyleSheet.create({
  selectedValue: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SelectedValueDisplay;
