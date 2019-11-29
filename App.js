import React from 'react';
import { View, SafeAreaView,Button,Image, StatusBar, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

import AppStyles from './styles/AppStyles';

import TabBar from './comps/TabBar';

import AddContact from './pages/contacts/AddContact';
import EmptyContacts from './pages/contacts/EmptyContacts';

import StartPage from './pages/StartPage';

import Route from './pages/Route'

function App(){
  console.disableYellowBox = true;

  return (

      <View style={[AppStyles.app, {backgroundColor:'blue'}]}>

        <StatusBar barStyle="dark-content" />

        <StartPage/>

          {/* <View style={{flex:1}}>
            <Route />
          </View> 
          
           <View style={{display:'flex'}}>
          <TabBar/>
          <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          </SafeAreaView> 
           </View> */}
          
      </View>

  )

};
 export default App;
// export default from './storybook';