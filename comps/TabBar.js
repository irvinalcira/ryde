import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';



import TabBarStyles from '../styles/comps/TabBarStyles';

function TabBar(){
  return(

      <View style={TabBarStyles.Container}>

            <TouchableOpacity style={TabBarStyles.Button}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={require('../assets/icons/home.png')}
            />
            <Text style={TabBarStyles.Text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TabBarStyles.Button}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={require('../assets/icons/bus.png')}
            />
            <Text style={TabBarStyles.Text}>Buses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TabBarStyles.Button}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={require('../assets/icons/skytrain.png')}
            />
            <Text style={TabBarStyles.Text}>SkyTrains</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TabBarStyles.Button} onPress={() => Actions.reset('Taxis')}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={require('../assets/icons/taxi.png')}
            />
            <Text style={TabBarStyles.Text}>Taxis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TabBarStyles.Button} onPress={() => Actions.reset('Contacts')}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={require('../assets/icons/contact.png')}
            />
            <Text style={TabBarStyles.Text}>Contacts</Text>
            </TouchableOpacity>



      </View>
  )
};

export default TabBar;