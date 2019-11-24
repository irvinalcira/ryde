import React, {Component} from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <SafeAreaView style={{justifyContent: "center", alignItems: "center"}}>
      <LottieView source={require('../assets/animations/117-progress-bar.json')} autoPlay loop />
    
    // Visual reference of what it's supposed to look like
      <Image 
      style={{width: 200, height: 200}}
      source={require('../assets/animations/117-progress-bar.gif')} />
    </SafeAreaView>
  )
}

export default Loading;
