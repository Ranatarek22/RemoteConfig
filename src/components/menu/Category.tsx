import React from 'react';
import {StyleSheet} from 'react-native';
import {Menu} from 'react-native-paper';

interface Subcategory {
  label: string;
  value: string;
}

interface CategoryProps {
  category: string;
  subcategories: Subcategory[];
  onSelect: (label: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  category,
  subcategories,
  onSelect,
}) => (
  <React.Fragment>
    <Menu.Item title={category} disabled style={styles.categoryItem} />
    {subcategories.map((subcategory, index) => (
      <Menu.Item
        key={index}
        onPress={() => onSelect(subcategory.label)}
        title={subcategory.label}
        style={styles.subcategoryItem}
      />
    ))}
  </React.Fragment>
);

const styles = StyleSheet.create({
  categoryItem: {
    backgroundColor: '#e3f2fd',
    paddingVertical: 8,
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subcategoryItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingLeft: 24,
    fontSize: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
});

export default Category;
