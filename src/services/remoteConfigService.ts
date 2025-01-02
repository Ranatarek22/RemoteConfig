import remoteConfig from '@react-native-firebase/remote-config';

export const remoteConfigService = {
  async fetchLogoURL(): Promise<string> {
    try {
      await remoteConfig().setDefaults({
        splash_logo_url:
          'https://tse2.mm.bing.net/th?id=OIP.hQ2zPS6VNQFnizu6LSU1ngHaHa&pid=Api&P=0&h=220',
      });

      if (__DEV__) {
        await remoteConfig().setConfigSettings({
          minimumFetchIntervalMillis: 0,
        });
      }

      await remoteConfig().fetchAndActivate();
      const logoURL = remoteConfig().getValue('splash_logo_url').asString();
      console.log(`Fetched logo URL: ${logoURL}`);
      return logoURL;
    } catch (error) {
      console.error('Error fetching Remote Config values:', error);
      return '';
    }
  },
};
