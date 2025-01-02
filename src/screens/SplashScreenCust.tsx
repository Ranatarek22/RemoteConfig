import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import MMKVStorage from 'react-native-mmkv-storage';
import {remoteConfigService} from '../services/remoteConfigService';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Splash from '../components/splashscreen/Splash';
import {RootParamList} from '../model/RootParamList';

const MMKV = new MMKVStorage.Loader().initialize();

const SplashScreenCust: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();
  const [logoURL, setLogoURL] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLogoAndNavigate = async () => {
      try {
        const fetchedLogo = await remoteConfigService.fetchLogoURL();
        setLogoURL(fetchedLogo);
        const lastScreen = MMKV.getString('lastScreen') || 'Home';

     
        if (lastScreen === 'CountryDetailScreen' || lastScreen === 'Home') {
          setTimeout(() => {
            navigation.replace('Drawer'); 
          }, 3000);
        } else {
          setTimeout(() => {
            navigation.replace(lastScreen as keyof RootParamList); 
          }, 3000);
        }
      } catch (err) {
        setError('Error loading splash screen: ' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogoAndNavigate();
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingMessage}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Splash logoURL={logoURL} />
      <Text style={styles.message}>Welcome to our App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  loadingMessage: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default SplashScreenCust;
