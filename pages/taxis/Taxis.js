import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView,TouchableOpacity, TextInput, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import TaxisStyles from '../../styles/taxis/TaxisStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

function Taxis(){
  return (
    <SafeAreaView style={TaxisStyles.Container}>
      <View style={TaxisStyles.Container}>
        
        <Text style={Fonts.Title}>Taxis</Text>

        <Text style={Fonts.Heading}>Location</Text>
        <Text style={Fonts.Body}>Enter a location to view taxis in the surrounding area</Text>

        {/* This will be a Searchable Drop Down     */}

        <TextInput style={Fonts.Inp}
        placeholder="Vancouver, BC"
        placeholderTextColor='black' 
        />
        
        <TouchableOpacity style={Buttons.Main}>
        <Text style={Buttons.MainText}>Search Location</Text>
        </TouchableOpacity>


        <View style={TaxisStyles.TaxisView}>
        <Text style={Fonts.Heading}>Taxis in Vancouver</Text>
        </View>

        <View style={TaxisStyles.TaxiButtonsContainer}>

        {/* First Taxi */}
        <TouchableOpacity  style={Buttons.Taxi} onPress={() => Actions.SelectedTaxi()}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/taxi.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Buttons.TaxiText}>
                            Vancouver Taxi
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Second Taxi */}
        <TouchableOpacity  style={Buttons.Taxi}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/taxi-active.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={[Buttons.TaxiText, Buttons.TextAltColor]}>
                            Black &amp; Checker Cabs
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/bluearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Third Taxi */}
        <TouchableOpacity  style={Buttons.Taxi}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/taxi.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Buttons.TaxiText}>
                            Excel Limosuine Service
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Fourth Taxi */}
        <TouchableOpacity  style={Buttons.Taxi}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/taxi-active.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={[Buttons.TaxiText, Buttons.TextAltColor]}>
                            Yellow Cabs
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/bluearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        </View>


      </View>
      </SafeAreaView>
  )
};

export default Taxis;