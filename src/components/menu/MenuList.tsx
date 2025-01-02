import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Menu, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../../store/store';
import {
  toggleMenu,
  setSelectedCategory,
} from '../../features/countriesdropdown/menuSlice';
import MenuButton from '../buttons/MenuButton';
import Category from "./Category";
import SelectedValueDisplay from './SelectedValueDisplay';

const MenuList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, isVisible, selectedValue} = useSelector(
    (state: RootState) => state.menu,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleCategorySelect = (category: string) => {
    dispatch(setSelectedCategory(category));
    setMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => dispatch(toggleMenu())}
        style={styles.toggleButton}>
        {isVisible ? 'Hide Menu' : 'Show Menu'}
      </Button>

      {isVisible && (
        <>
          <Menu
            visible={menuOpen}
            onDismiss={handleMenuToggle}
            anchor={<MenuButton onPress={handleMenuToggle} />}
            style={styles.menu}>
            {data.map((category, index) => (
              <Category
                key={index}
                category={category.category}
                subcategories={category.subcategories}
                onSelect={handleCategorySelect}
              />
            ))}
          </Menu>

          <SelectedValueDisplay value={selectedValue} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  toggleButton: {
    backgroundColor: '#5c6bc0',
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
  },
  menu: {
    width: '80%',
    maxWidth: 400,
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
});

export default MenuList;
