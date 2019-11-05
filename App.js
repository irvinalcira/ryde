import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {Actions} from 'react-native-router-flux';


import AppStyles from './styles/AppStyles';

import SelectedTaxi from './pages/taxis/SelectedTaxi';
import Route from './pages/Route'
import TabBar from './comps/TabBar';

function App(){
  return (

      <View style={AppStyles.app}>

          <View style={{flex:1}}>
            <Route/>
          </View>
          
          <TabBar/>
          <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          </SafeAreaView>
      </View>

  )
};

export default App;