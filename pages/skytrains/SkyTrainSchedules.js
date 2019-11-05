import React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity, TextInput, Image } from 'react-native';
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

        {/* First Train */}
        <TouchableOpacity  style={SkyTrainScheduleStyles.ExpoLine}>
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
                        source={require('../../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Second Train */}
        <TouchableOpacity  style={SkyTrainScheduleStyles.MilleniumLine}>
                {/* Left Icon */}
                <View style={SkyTrainScheduleStyles.IconCont}>
                        <Image
                        style={SkyTrainScheduleStyles.TrainImg}
                        source={require('../../assets/icons/blacktrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={SkyTrainScheduleStyles.TextCont}>
                        <Text style={SkyTrainScheduleStyles.MilleniumText}>
                            Millenium Line
                        </Text>
                </View>

                {/* Right Icon */}
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
                        source={require('../../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        </View>


      </View>
      </SafeAreaView>
  )
};