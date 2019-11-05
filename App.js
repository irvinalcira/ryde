import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {Actions} from 'react-native-router-flux';


import AppStyles from './styles/AppStyles';

import SelectedTaxi from './pages/taxis/SelectedTaxi';
import Route from './pages/Route'
import NavBar from './comps/NavBar';

function App(){
  return (

      <View style={AppStyles.app}>

          <View style={{flex:1}}>
            <Route/>
          </View>

          <SafeAreaView>
              <NavBar/>
          </SafeAreaView>
      </View>

  )
};

export default App;