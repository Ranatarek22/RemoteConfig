import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import countriesData from '../../data/Countries.json';

interface DropdownState {
  selectedValue: string | null;
  options: {label: string; value: string; category?: string}[];
}

const flattenOptions = (data: typeof countriesData) => {
  return data.flatMap(category =>
    category.subcategories.map(sub => ({
      label: sub.label,
      value: sub.value,
      category: category.category, 
    })),
  );
};

const initialState: DropdownState = {
  selectedValue: null,
  options: flattenOptions(countriesData),
};

const dropdownSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setSelectedValue(state, action: PayloadAction<string | null>) {
      state.selectedValue = action.payload;
    },
  },
});

export const {setSelectedValue} = dropdownSlice.actions;
export default dropdownSlice.reducer;
