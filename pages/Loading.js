import React, {Component} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <SafeAreaView style={{justifyContent: "center", alignItems: "center"}}>
      <LottieView source={require('../assets/animations/117-progress-bar.json')} autoPlay loop />;
      <Text>Hi</Text>
    </SafeAreaView>
  )
}

export default Loading;