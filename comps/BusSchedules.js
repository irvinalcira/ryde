import React from 'react';
import { View, Text, TextInput,TouchableOpacity, Image } from 'react-native'
import TabBar from './TabBar';
import styles from '../styles/BusSchedulesStyles';

function BusSchedules(){
  return(
      <View style={styles.busstyles}>
          <View style={[styles.busstyles]}>
           <Text style={styles.buschedfont}>Bus Schedules</Text>
           <Text style={styles.findbusfont}>Find A Bus</Text>
           <Text style={styles.searchbusfont}>Search for a Bus to see it's full route</Text>
           <TextInput
           style={styles.secondview}
           placeholder="Enter Bus Name"
           />
            <Image
          style={styles.ImageStyle}
          source={require('../assets/icons/search.png')}
          />
             <TouchableOpacity style={styles.firstbutton}>
               <Text style={styles.firstbuttontxt}>View All Bus Routes</Text>
           </TouchableOpacity>
           <Text style={styles.viewbusfont}>View Bus Departures in Real-Time</Text>
           <Text style={styles.typeinfont}>Type in a Bus route number to view when the next bus comes</Text>
           <TextInput
           style={styles.thirdview}
           placeholder="Enter Bus Stop Number (IE:#60432)"
           />
               <Image
          style={styles.ImageStyle}
          source={require('../assets/icons/search.png')}
          />
           <TouchableOpacity style={styles.secondbutton}>
               <Text style={styles.secondbuttontxt}>Find Bus</Text>
           </TouchableOpacity>
           </View>
             <TabBar />
      </View>
  )
};

export default BusSchedules;