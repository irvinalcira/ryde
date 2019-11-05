import React from 'react';
import { View, SafeAreaView,Button,Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


import AppStyles from './styles/AppStyles';
import AddContacts from './pages/contacts/AddContacts';
import EmptyContacts from './pages/contacts/EmptyContacts';
import Route from './pages/Route'
import NavBar from './comps/NavBar';
import SkyTrainLastRoute from './pages/skytrains/SkyTrainLastRoute';

function App(){
  return (

      <View style={AppStyles.app}>
          <View style={{flex:1}}>

          </View>

          <SafeAreaView>
              <NavBar/>
          </SafeAreaView>
          
      </View>

  )

};
export default App;