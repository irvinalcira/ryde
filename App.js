import React from 'react';
import { View, SafeAreaView,Button,Image, StatusBar } from 'react-native';
import {Actions} from 'react-native-router-flux';


import AppStyles from './styles/AppStyles';

import TabBar from './comps/TabBar';

import AddContacts from './pages/contacts/AddContacts';
import EmptyContacts from './pages/contacts/EmptyContacts';
import Route from './pages/Route'


function App(){
  return (

      <View style={AppStyles.app}>

        <StatusBar barStyle="dark-content" />

          <View style={{flex:1}}>
            <Route />
          </View>
          
          <TabBar/>
          <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          </SafeAreaView>
          
      </View>

  )

};
// export default App;
export default from './storybook';