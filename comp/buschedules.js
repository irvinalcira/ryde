import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/buschedulesstyles';

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
          source={require('../assets/search.png')}
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
          source={require('../assets/search.png')}
          />
           <TouchableOpacity style={styles.secondbutton}>
               <Text style={styles.secondbuttontxt}>Find Bus</Text>
           </TouchableOpacity>
           </View>
           <View style={styles.imgstyles}>
           <Image
          style={styles.barstyles}
          source={require('../assets/navbar.png')}
        />
        </View>
      </View>
  )
};

export default BusSchedules;