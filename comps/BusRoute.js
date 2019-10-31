import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image,ScrollView, SafeAreaView} from 'react-native';
import TabBar from './TabBar';
import styles from '../styles/BusRouteStyles';

export default function BusRoute(){
  return(
      <View style={styles.busroutestyles}>
          <View style={styles.topview}>
            <View style={styles.imgstyles}>
              <View style={styles.busrouteview}>
                <Image
                style={styles.backarrow}
                source={require('../assets/icons/whitearrow.png')}
                />
                </View>
                < View style={styles.busrouteview2}>
                <Text style={styles.busroutefont}>Bus Route</Text>
                </View>
            </View>
            
                  <View style={styles.midstyles}>
                    <Image
                      style={styles.whitebus}
                      source={require('../assets/icons/whitebus.png')}
                    />
                      <Text style={{color:"white",margin:10}}>116 Edmonds Station</Text>
                      <Text style={{color:"white"}}>EAST</Text>
                  </View>
                      <View style={styles.botstyles}>
                        <Text style={{color:"white"}}>Stop Name</Text>
                        <Text style={{color:"white"}}>Stop Number</Text>
                      </View>
              
   
            </View>
            <ScrollView style={styles.ScrollView}>
              <Text style={styles.busview1}>Test</Text>
              <Text style={styles.busview2}>Test</Text>
              <Text style={styles.busview1}>Test</Text>
              <Text style={styles.busview2}>Test</Text>
              <Text style={styles.busview1}>Test</Text>
              <Text style={styles.busview2}>Test</Text>
            </ScrollView>
            <TabBar />
        </View>
  )
};