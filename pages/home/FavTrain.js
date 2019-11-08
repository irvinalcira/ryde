import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import TabName from '../../comps/TabName';

export default class FavTrain extends React.Component {

  static navigationOptions = {

  };
  
  render() {

    return(

      <View>
        <TabName name={'Fav Train'} />
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