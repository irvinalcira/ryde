import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Alert,Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


const CurrentPosition = () => {
  const [error, setError] = useState("");
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  });

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setError("");
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      },
      e => setError(e.message)
    );
  };
  useEffect(() => {
    getPosition();
// console.log(position.latitude, position.longitude)
  },[Geolocation.requestAuthorization()]);

  return (
    <View >
          <Text>Latitude: {position.latitude}</Text>
          <Text>Longitude: {position.longitude}</Text>
    </View>
  );
};

export default CurrentPosition;