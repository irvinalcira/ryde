import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView,TouchableOpacity, TextInput, Image } from 'react-native';
import TabBar from '../comps/TabBar';
import TaxisStyles from '../styles/TaxisStyles';

function Taxis(){
  return (
    <SafeAreaView style={TaxisStyles.Container}>
      <View style={TaxisStyles.Container}>


        
        <Text style={TaxisStyles.Title}>Taxis</Text>

        


        <Text style={TaxisStyles.Heading}>My Location</Text>

        {/* This will be a Searchable Drop Down        */}

        <TextInput style={TaxisStyles.Inp}
        placeholder="Vancouver, BC"
        placeholderTextColor='black' 
        />
        
        <TouchableOpacity  style={TaxisStyles.SearchBut}>
        <Text style={TaxisStyles.SearchButText}>Search Location</Text>
        </TouchableOpacity>


        <View style={TaxisStyles.TaxisView}>
        <Text style={TaxisStyles.Heading}>Taxis in Vancouver</Text>
        </View>

        <View style={TaxisStyles.TaxiButtonsContainer}>

        {/* First Taxi */}
        <TouchableOpacity  style={TaxisStyles.TaxiBut}>
                {/* Left Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.TaxiImg}
                        source={require('../assets/icons/blacktaxi.png')}
                        />
                </View>

                {/* Text */}
                <View style={TaxisStyles.TextCont}>
                        <Text style={TaxisStyles.TaxiButText}>
                            Vancouver Taxi
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.ArrowImg}
                        source={require('../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Second Taxi */}
        <TouchableOpacity  style={TaxisStyles.TaxiBut}>
                {/* Left Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.TaxiImg}
                        source={require('../assets/icons/bluetaxi.png')}
                        />
                </View>

                {/* Text */}
                <View style={TaxisStyles.TextCont}>
                        <Text style={[TaxisStyles.TaxiButText, TaxisStyles.TextAltColor]}>
                            Black Top &amp; Checker Cabs
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.ArrowImg}
                        source={require('../assets/icons/bluearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Third Taxi */}
        <TouchableOpacity  style={TaxisStyles.TaxiBut}>
                {/* Left Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.TaxiImg}
                        source={require('../assets/icons/blacktaxi.png')}
                        />
                </View>

                {/* Text */}
                <View style={TaxisStyles.TextCont}>
                        <Text style={TaxisStyles.TaxiButText}>
                            Excel Limosuine Service
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.ArrowImg}
                        source={require('../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Fourth Taxi */}
        <TouchableOpacity  style={TaxisStyles.TaxiBut}>
                {/* Left Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.TaxiImg}
                        source={require('../assets/icons/bluetaxi.png')}
                        />
                </View>

                {/* Text */}
                <View style={TaxisStyles.TextCont}>
                        <Text style={[TaxisStyles.TaxiButText, TaxisStyles.TextAltColor]}>
                            Yellow Cabs
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={TaxisStyles.IconCont}>
                        <Image
                        style={TaxisStyles.ArrowImg}
                        source={require('../assets/icons/bluearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        </View>



      <TabBar />
      </View>
      </SafeAreaView>
  )
};

export default Taxis;