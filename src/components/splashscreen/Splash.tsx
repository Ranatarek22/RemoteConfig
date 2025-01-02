
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface SplashScreenLogoProps {
  logoURL: string | null;
}

const Splash: React.FC<SplashScreenLogoProps> = ({logoURL}) => {
  return (
    <View style={styles.container}>
      {logoURL && <Image source={{uri: logoURL}} style={styles.logo} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Splash;
