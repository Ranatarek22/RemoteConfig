import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store/store';
import {setSelectedValue} from '../features/countriesdropdown/CountriesSlice';
import CountriesDropDown from '../components/dropdownlists/CountriesDropDown';
import {useNavigation} from '@react-navigation/native';
import {RootParamList} from '../model/RootParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import MenuList from '../components/menu/MenuList';
import { PaperProvider } from 'react-native-paper';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {options, selectedValue} = useSelector(
    (state: RootState) => state.dropdown,
  );
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();
  const [open, setOpen] = useState(false);
  const [localValue, setLocalValue] = useState<string | null>(selectedValue);

  const handleValueChange = (value: string | null) => {
    console.log(value ? `${value} selected` : 'No value selected');
    setLocalValue(value);
    dispatch(setSelectedValue(value));
    if (value) {
      navigation.navigate('CountryDetailScreen');
    }
  };

  return (
    <View style={styles.container}>
      <CountriesDropDown
        open={open}
        setOpen={setOpen}
        value={localValue}
        setValue={newValue => {
          if (typeof newValue === 'function') {
            const computedValue = newValue(localValue);
            handleValueChange(computedValue);
          } else {
            handleValueChange(newValue);
          }
        }}
        items={options}
      />
      <Text style={styles.selectedText}>
        {localValue ? ` ${localValue}` : 'No country selected'}
      </Text>
      <PaperProvider>
        <MenuList />
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
