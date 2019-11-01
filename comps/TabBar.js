import React from 'react';
import {TouchableOpacity,Image,Text, SafeAreaView} from 'react-native';
import TabBarStyles from '../styles/TabBarStyles';

export default function TabBar(){
    return(

      <SafeAreaView style={TabBarStyles.Bottom}>


            <TouchableOpacity style={TabBarStyles.TouchStyle}>
            <Image
            style={TabBarStyles.BotImg}
              source={require('../assets/icons/blackhouse.png')}
            />
            {/* <Text style={TabBarStyles.Home}>Home</Text> */}
            </TouchableOpacity>

            
            <TouchableOpacity style={TabBarStyles.TouchStyle}>
            <Image
            style={TabBarStyles.BotImg}
              source={require('../assets/icons/active_bus.png')}
            />
            {/* <Text style={TabBarStyles.Home}>Bus Schedules</Text> */}
            </TouchableOpacity>


            <TouchableOpacity style={TabBarStyles.TouchStyle}>
            <Image
            style={TabBarStyles.BotImg}
              source={require('../assets/icons/blacktrain.png')}
            />
            
            {/* <Text style={TabBarStyles.Home}>Train Schedules</Text> */}
            </TouchableOpacity>


            <TouchableOpacity style={TabBarStyles.TouchStyle}>
            <Image
            style={TabBarStyles.BotImg}
              source={require('../assets/icons/blacktaxi.png')}
            />
            {/* <Text style={TabBarStyles.Home}>Taxis</Text> */}
            </TouchableOpacity>


            <TouchableOpacity style={TabBarStyles.TouchStyle}>
                
            <Image
            style={TabBarStyles.BotImg}
              source={require('../assets/icons/blackcall.png')}
            />
                                {/* <Text style={TabBarStyles.Home}>Contacts</Text> */}
            </TouchableOpacity>

        </SafeAreaView>
        
  )
}