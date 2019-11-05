import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import NavBarStyles from '../styles/comps/NavBarStyles';

function NavBar(){
  return(

      <View style={NavBarStyles.Container}>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image style={NavBarStyles.Img}
              source={require('../assets/icons/blackhouse.png')}
            />
            <Text style={NavBarStyles.Text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image style={NavBarStyles.Img}
              source={require('../assets/icons/blackbus.png')}
            />
            <Text style={NavBarStyles.Text}>Bus Schedules</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image style={NavBarStyles.Img}
              source={require('../assets/icons/blacktrain.png')}
            />
            <Text style={NavBarStyles.Text}>SkyTrain Schedules</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image style={NavBarStyles.Img}
              source={require('../assets/icons/blacktaxi.png')}
            />
            <Text style={NavBarStyles.Text}>Taxis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image style={NavBarStyles.Img}
              source={require('../assets/icons/blackcall.png')}
            />
            <Text style={NavBarStyles.Text}>Contacts</Text>
            </TouchableOpacity>



      </View>
  )
};

export default NavBar;