import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  items: {label: string; value: string; category?: string}[];
}

const CountriesDropDown: React.FC<DropdownProps> = ({
  open,
  setOpen,
  value,
  setValue,
  items,
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items.map(item => ({
        label: `${item.category ? `${item.category} - ` : ''}${item.label}`,
        value: item.value,
      }))}
      setOpen={setOpen}
      setValue={setValue}
      placeholder="Select a country"
      style={{borderColor: '#ccc', borderWidth: 1}}
      dropDownContainerStyle={{borderColor: '#ccc'}}
    />
  );
};

export default CountriesDropDown;
