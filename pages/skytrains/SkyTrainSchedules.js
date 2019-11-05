import React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity, TextInput, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainScheduleStyles from '../../styles/skytrains/SkyTrainSchedulesStyles';

export default function SkyTrainSchedules(){
  return (
    <SafeAreaView style={SkyTrainScheduleStyles.Container}>
      <View style={SkyTrainScheduleStyles.Container}>


        
        <Text style={SkyTrainScheduleStyles.Title}>SkyTrain Schedules</Text>

        


        <Text style={SkyTrainScheduleStyles.Heading}>Find A SkyTrain Station</Text>


        <TextInput style={SkyTrainScheduleStyles.Inp}
        placeholder="Search For SkyTrain Station"
        placeholderTextColor='black' 
        />
        <Image
          style={SkyTrainScheduleStyles.Search}
          source={require('../../assets/icons/search.png')}
          />


        <View style={SkyTrainScheduleStyles.TrainView}>
        <Text style={SkyTrainScheduleStyles.Heading}>View SkyTrain Stations by line</Text>
        </View>

        <View style={SkyTrainScheduleStyles.TaxiButtonsContainer}>

        {/* Expo Line */}
        <TouchableOpacity  style={SkyTrainScheduleStyles.ExpoLine} onPress={() => Actions.SkyTrainRoute()}>
                {/* Left Icon */}
                <View style={SkyTrainScheduleStyles.IconCont}>
                        <Image
                        style={SkyTrainScheduleStyles.TrainImg}
                        source={require('../../assets/icons/whitetrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={SkyTrainScheduleStyles.TextCont}>
                        <Text style={SkyTrainScheduleStyles.ExpoText}>
                            Expo Line
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={SkyTrainScheduleStyles.IconCont}>
                        <Image
                        style={SkyTrainScheduleStyles.ArrowImg}
                        source={require('../../assets/icons/whitearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Millenium Line */}
        <TouchableOpacity  style={SkyTrainScheduleStyles.MilleniumLine}>
                {/* Left Icon */}
                <View style={SkyTrainScheduleStyles.IconCont}>
                        <Image
                        style={SkyTrainScheduleStyles.TrainImg}
                        source={require('../../assets/icons/skytrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={SkyTrainScheduleStyles.TextCont}>
                        <Text style={SkyTrainScheduleStyles.MilleniumText}>
                            Millenium Line
                        </Text>
                </View>

                {/* Canada Line */}
                <View style={SkyTrainScheduleStyles.IconCont}>
                        <Image
                        style={SkyTrainScheduleStyles.ArrowImg}
                        source={require('../../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Third Train */}
        <TouchableOpacity  style={SkyTrainScheduleStyles.CanadaLine}>
                {/* Left Icon */}
                <View style={SkyTrainScheduleStyles.IconCont}>
                        <Image
                        style={SkyTrainScheduleStyles.TrainImg}
                        source={require('../../assets/icons/whitetrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={SkyTrainScheduleStyles.TextCont}>
                        <Text style={SkyTrainScheduleStyles.CanadaText}>
                            Canada Line
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={SkyTrainScheduleStyles.IconCont}>
                        <Image
                        style={SkyTrainScheduleStyles.ArrowImg}
                        source={require('../../assets/icons/whitearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        </View>


      </View>
      </SafeAreaView>
  )
};