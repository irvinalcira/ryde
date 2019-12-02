import React, {useState, useEffect} from 'react';
import { View, SafeAreaView,Button,Image, StatusBar, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

import AppStyles from './styles/AppStyles';

import TabBar from './comps/TabBar';

import AddContact from './pages/contacts/AddContact';
import EmptyContacts from './pages/contacts/EmptyContacts';

import StartPage from './pages/StartPage';
import Main from './Main';

import Route from './pages/Route'
import StartPageStyles from './styles/StartPageStyles';

function App(){
  console.disableYellowBox = true;

  // USER NAME DISPLAY USE STATE
  const [ AppView, setAppView ] = useState(null);
  const [ Name, SetUserName ] = useState(null);

  // SET THE USERNAME
    async function GetUserName(){
      var getUsername = await AsyncStorage.getItem("user");
      var parseUsername = JSON.parse(getUsername);
      username = parseUsername.UserName;
      var stringifyName = JSON.stringify(username);
      SetUserName(stringifyName);
      CheckState();
      console.log(Name);
    }
    
    useEffect(() => {
     GetUserName();


     // UN-COMMENT THE CODE BELOW TO RESET USER NAME TO NOTHING
    //  AsyncStorage.clear()
  
  },[]);


 function CheckState(){
  if (Name === null){
    setAppView(<StartPage setAppView={setAppView} AppView={AppView}/>)
  }  else {    
    setAppView(<Main />)
  }
}


  return (

      <View style={[AppStyles.app, {backgroundColor:'#f4f4f4'}]}>

        <StatusBar barStyle="dark-content" />

        

        { AppView }

        {/* <StartPage/> */}

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