import React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity, TextInput, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainScheduleStyles from '../../styles/skytrains/SkyTrainSchedulesStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
//test
export default function SkyTrainSchedules(){
  return (
    <SafeAreaView style={SkyTrainScheduleStyles.Container}>
      <View style={SkyTrainScheduleStyles.Container}>
        
        <Text style={Fonts.Title}>SkyTrain Schedules</Text>
        <Text style={Fonts.Heading}>Find A SkyTrain Station</Text>
        <Text style={Fonts.Body}>Search for a SkyTrain station to see its schedules</Text>


        <TextInput style={Fonts.Inp}
        placeholder="Example: Waterfront Station"
        placeholderTextColor='gray' 
        />

        <TouchableOpacity style={Buttons.Main}>
              <Text style={Buttons.MainText}>View Station</Text>
          </TouchableOpacity>

        <View style={SkyTrainScheduleStyles.TrainView}>
        <Text style={Fonts.Heading}>View SkyTrain Stations by line</Text>
        </View>

        <View style={SkyTrainScheduleStyles.TaxiButtonsContainer}>

        {/* Expo Line */}
        <TouchableOpacity  style={[Buttons.SkyTrain, {backgroundColor: "#235CA3"}]} onPress={() => Actions.SkyTrainRoute()}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/whitetrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Fonts.WhiteButText}>
                            Expo Line
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/whitearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Millenium Line */}
        <TouchableOpacity  style={[Buttons.SkyTrain, {backgroundColor: "#F7D148"}]}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/skytrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Fonts.BlackButText}>
                            Millenium Line
                        </Text>
                </View>

                {/* Canada Line */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Third Train */}
        <TouchableOpacity  style={[Buttons.SkyTrain, {backgroundColor: "#4298C2"}]}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/whitetrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Fonts.WhiteButText}>
                            Canada Line
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/whitearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        </View>


      </View>
      </SafeAreaView>
  )
};