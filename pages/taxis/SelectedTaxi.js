import React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import SelectedTaxiStyles from '../../styles/taxis/SelectedTaxiStyles';

function SelectedTaxi(){

    

  return (
  

    <View style={SelectedTaxiStyles.Container}>

<StatusBar   
    hidden={true} />  

    <View style={SelectedTaxiStyles.Container}>

    <View style={SelectedTaxiStyles.BackButton}>

        <TouchableOpacity onPress={() => Actions.pop('Taxis')}>
        <Image
            style={SelectedTaxiStyles.BackIcon}
            source={require('../../assets/icons/back2.png')}
        />
        </TouchableOpacity>
</View>
 
    <View style={SelectedTaxiStyles.TaxiImageContainer}>
        <Image
                style={SelectedTaxiStyles.TaxiImg}
                source={require('../../imgs/taxis/vancouver-taxi.jpg')}
            />
    </View>



<View style={SelectedTaxiStyles.TaxiInformationContainer}>

     <View style={SelectedTaxiStyles.TitleContainer}>

    <View style={SelectedTaxiStyles.TaxiName}>    
        <Text style={SelectedTaxiStyles.Title}>Vancouver Taxi</Text>
    </View>

    <View style={SelectedTaxiStyles.TaxiFavorite}>
        <Image
            style={SelectedTaxiStyles.FavoriteIcon}
            source={require('../../assets/icons/favorite2.png')}
        />
    </View>

    </View>


    <View style={SelectedTaxiStyles.InfoContainer}>
    <Text style={SelectedTaxiStyles.SubHeading}>Address</Text>
    <Text style={SelectedTaxiStyles.Description}>760 Clark Drive, Vancouver, BC, V5L 3J2</Text>
    </View>

    <View style={SelectedTaxiStyles.InfoContainer}>
    <Text style={SelectedTaxiStyles.SubHeading}>Website</Text>
    <Text style={SelectedTaxiStyles.Description}>www.avancouvertaxi.com</Text>
    </View>

    <View style={SelectedTaxiStyles.InfoContainer}>
    <Text style={SelectedTaxiStyles.SubHeading}>Phone Number</Text>
    <Text style={SelectedTaxiStyles.Description}>(604) 871-1111</Text>
    </View>

    <TouchableOpacity  style={SelectedTaxiStyles.CallBut}>
    <Text style={SelectedTaxiStyles.CallButText}>Call Taxi</Text>
    </TouchableOpacity>

</View>

        
      </View>
      </View>
  )
};

export default SelectedTaxi;