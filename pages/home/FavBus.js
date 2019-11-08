import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import TabName from '../../comps/TabName';

export default class FavBus extends React.Component {

  static navigationOptions = {

  };
  
  render() {

    return(

      <View>
        <TabName name={'Fav Bus'} />
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