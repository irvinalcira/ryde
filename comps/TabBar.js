import React from 'react';
import {TouchableOpacity,Image,Text, SafeAreaView} from 'react-native';
import styles from '../styles/tabbarstyles';

export default function TabBar(){
    return(
        <SafeAreaView style={styles.bottom}>
<TouchableOpacity style={styles.touchstyle}>
<Image
style={styles.botimg}
        source={require('../assets/icons/blackhouse.png')}
      />
       {/* <Text style={styles.home}>Home</Text> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchstyle}>
      <Image
      style={styles.botimg}
        source={require('../assets/icons/active_bus.png')}
      />
       {/* <Text style={styles.home}>Bus Schedules</Text> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchstyle}>
      <Image
      style={styles.botimg}
        source={require('../assets/icons/blacktrain.png')}
      />
      
       {/* <Text style={styles.home}>Train Schedules</Text> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchstyle}>
      <Image
      style={styles.botimg}
        source={require('../assets/icons/blacktaxi.png')}
      />
       {/* <Text style={styles.home}>Taxis</Text> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchstyle}>
          
      <Image
      style={styles.botimg}
        source={require('../assets/icons/blackcall.png')}
      />
                          {/* <Text style={styles.home}>Contacts</Text> */}
      </TouchableOpacity>
</SafeAreaView>
    )
}