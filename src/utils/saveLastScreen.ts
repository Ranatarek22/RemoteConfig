
import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();


export const saveLastScreen = async (screenName: string) => {
  try {
    MMKV.setString('lastScreen', screenName);
  } catch (error) {
    console.error('Error saving last screen:', error);
  }
};
