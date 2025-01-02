import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import BackButton from '../components/arrows/BackButton'; 
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../model/RootParamList';

const CountryDetailScreen: React.FC = ({}) => {
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();
  const {selectedValue} = useSelector((state: RootState) => state.dropdown);

  return (
    <View style={styles.container}>
 
      <BackButton onPress={() => navigation.navigate('Home')} />

      <Text style={styles.title}>Selected Country:</Text>
      <Text style={styles.country}>
        {selectedValue || 'No country selected'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  country: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default CountryDetailScreen;
