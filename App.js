import React from 'react';
import { View, SafeAreaView,Button,Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


import AppStyles from './styles/AppStyles';
import AddContacts from './pages/contacts/AddContacts';
import EmptyContacts from './pages/contacts/EmptyContacts';
import Route from './pages/Route'


function App(){
  return (

      <View style={AppStyles.app}>
          <View style={{flex:1}}>

          </View>
          
          <TabBar/>
          <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          </SafeAreaView>
          
      </View>

  )

};
export default App;