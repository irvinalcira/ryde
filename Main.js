import React, {useState, useEffect} from 'react';
import { View, SafeAreaView,Button,Image, StatusBar, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

import AppStyles from './styles/AppStyles';

import TabBar from './comps/TabBar';

import AddContact from './pages/contacts/AddContact';
import EmptyContacts from './pages/contacts/EmptyContacts';

import StartPage from './pages/StartPage';

import Route from './pages/Route'
import StartPageStyles from './styles/StartPageStyles';

function Main(){
  console.disableYellowBox = true;

  // USER NAME DISPLAY USE STATE
  const [ Name, SetUserName ] = useState(null);

  // SET THE USERNAME
    async function GetUserName(){
      var getUsername = await AsyncStorage.getItem("user");
      var parseUsername = JSON.parse(getUsername);
      username = parseUsername.UserName;
      SetUserName(username);
      console.log('username: ', username)
    }
    useEffect(() => {
     GetUserName();

     // UN-COMMENT THE CODE BELOW TO RESET USER NAME TO NOTHING
    //  AsyncStorage.clear()
  
  },[]);

  return (
      <View style={{flex:1}}>

          <View style={{flex:1}}>
            <Route />
          </View> 
          
           <View style={{display:'flex'}}>
          <TabBar/>
          <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          </SafeAreaView> 
           </View> 
    </View>
  )

};
 export default Main;
// export default from './storybook';