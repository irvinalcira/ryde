import React from 'react';
import { View, Text, Image,ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
import Fonts from '../../styles/FontsStyles';
//test
export default function SkyTrainRoute(){
  return(
    <SafeAreaView style={SkyTrainRouteStyles.Container}>
    <View style={SkyTrainRouteStyles.Container}>
      
        <View style={SkyTrainRouteStyles.TopView}>

        <View style={SkyTrainRouteStyles.NavBar}>

          <View style={SkyTrainRouteStyles.ArrowCont}>
          <TouchableOpacity onPress={() => Actions.pop('SkyTrain Schedules')}>
          <Image
          style={SkyTrainRouteStyles.BackArrow}
          source={require('../../assets/icons/backarrow.png')}
          />
          </TouchableOpacity>
          </View>

          <Text style={[Fonts.BusRoute, SkyTrainRouteStyles.NavTitle]}>Expo Line Station</Text>

          </View>
        
          
          <View style={SkyTrainRouteStyles.MidStyles}>
            <Image
              style={SkyTrainRouteStyles.WhiteTrain}
              source={require('../../assets/icons/whitebus.png')}
            />
              <Text style={Fonts.BlueCont}>To King George Station</Text>
              <Text style={Fonts.BlueCont}>WATERFRONT</Text>
          </View>
              <View style={SkyTrainRouteStyles.BotStyles}>
                <Text style={Fonts.BlueCont}>Station Name</Text>
                <Text style={Fonts.BlueCont}>Est Time</Text>
              </View>
            
 
          </View>
          <ScrollView style={SkyTrainRouteStyles.ScrollView}>

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={SkyTrainRouteStyles.TrainView}>

                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Waterfront </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>3</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={[SkyTrainRouteStyles.TrainView, {backgroundColor:"#DBDBDB",}]}>

                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Burrard </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>5</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={SkyTrainRouteStyles.TrainView}>

                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Granville </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>6</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={[SkyTrainRouteStyles.TrainView, {backgroundColor:"#DBDBDB",}]}>

                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Stadium - Chinatown </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>7</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={SkyTrainRouteStyles.TrainView}>
                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Main Street - Science World </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>10</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={[SkyTrainRouteStyles.TrainView, {backgroundColor:"#DBDBDB",}]}>

                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Commercial Broadway </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>13</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={SkyTrainRouteStyles.TrainView}>

                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Nanaimo </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>14</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={[SkyTrainRouteStyles.TrainView, {backgroundColor:"#DBDBDB",}]}>

                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  29th Avenue </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>16</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}

              {/* Train Station */}
              <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

              <View style={SkyTrainRouteStyles.TrainView}>
                <View style={SkyTrainRouteStyles.StationName}>
                <View style={SkyTrainRouteStyles.TrainCont}>
                  <Image
                    style={SkyTrainRouteStyles.TrainIcon}
                    source={require('../../assets/icons/skytrain-active.png')}
                    />
                </View>

                <View style={SkyTrainRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Joyce - Collingwood </Text>
                </View>
                </View>

                <View style={SkyTrainRouteStyles.TimeCont}>
                   <Text style={Fonts.EstNum}>18</Text>
                  
                  <Text style={Fonts.EstTime}>MIN AWAY</Text>

                </View>

              </View>
              </TouchableOpacity>
            {/* End of Train Station */}


          </ScrollView>
      </View>
      </SafeAreaView>
  )
};