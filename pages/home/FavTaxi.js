import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import TabName from '../../comps/TabName';

export default class FavTaxi extends React.Component {

  static navigationOptions = {

  };
  
  render() {

    return(

      <View>
        <TabName name={'Fav Taxi'} />
      </View>

    );

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

})