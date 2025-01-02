import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import menuData from '../../data/Countries.json'; 

interface MenuState {
  data: {category: string; subcategories: {label: string; value: string}[]}[];
  isVisible: boolean;
  selectedValue: string | null;
}

const initialState: MenuState = {
  data: menuData || [],
  isVisible: false,
  selectedValue: null,
};

const menuSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isVisible = !state.isVisible;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedValue = action.payload; 
    },
  },
});

export const {toggleMenu, setSelectedCategory} = menuSlice.actions;
export default menuSlice.reducer;
