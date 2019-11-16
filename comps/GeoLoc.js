import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function GeoLoc(){

  const [initialPosition, setInitialPosition] = useState('unknown');
  const [lastPosition, setLastPosition] = useState('unknown');
  const [watchID, setWatchID] = useState(null);

  useEffect(() =>{
    Geolocation.getCurrentPosition(
      position => {
        var initialPosition = JSON.stringify(position);
        setInitialPosition({position});
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    setWatchID = Geolocation.watchPosition(position => {
      var lastPosition = JSON.stringify(position);
      setLastPosition({position});
    });    
    var watchID = null && Geolocation.clearWatch(setWatchID);

  });
  // componentDidMount = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       var initialPosition = JSON.stringify(position);
  //       setInitialPosition({position});
  //     },
  //     error => Alert.alert('Error', JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );
  //   setWatchID = Geolocation.watchPosition(position => {
  //     var lastPosition = JSON.stringify(position);
  //     setLastPosition({position});
  //   });
  // }

  // componentWillUnmount = () =>{
  //   var watchID = null && Geolocation.clearWatch(setWatchID);
  // }
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {lastPosition}
        </Text>
      </View>
    );
  }


const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});