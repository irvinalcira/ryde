import React,{useEffect,useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image,ScrollView, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import BusRouteStyles from '../../styles/bus/BusRouteStyles';
import Fonts from '../../styles/FontsStyles';

export default function BusRoute(props){
const [StopNumberData,setStopNumberData] = useState("");
  var fetchData = async () => {
    const response = await fetch('http://localhost:8888/ryde/StopNumber.php?stopnum='+StopNumber);
    StopJson = await response.json();
    setStopNumberData(StopJson);
    console.log(StopNumberData);
  }
  useEffect(() => {
    fetchData();
  },[]);
  return(
    <SafeAreaView style={BusRouteStyles.Container}>
      <View style={BusRouteStyles.Container}>
        
          <View style={BusRouteStyles.TopView}>

          <View style={BusRouteStyles.NavBar}>

            <View style={BusRouteStyles.ArrowCont}>
            <TouchableOpacity onPress={() => Actions.pop("BusSchedules")}>
            <Image
            style={BusRouteStyles.BackArrow}
            source={require('../../assets/icons/backarrow.png')}
            />
            </TouchableOpacity>
            </View>

            <Text style={[Fonts.BusRoute, BusRouteStyles.NavTitle]}>Bus Route</Text>

            </View>
          
            
            <View style={BusRouteStyles.MidStyles}>
              <Image
                style={BusRouteStyles.WhiteBus}
                source={require('../../assets/icons/whitebus.png')}
              />
                <Text style={Fonts.Destination}>116 Edmonds Station</Text>
                <Text style={Fonts.BlueCont}>EAST</Text>
            </View>
                <View style={BusRouteStyles.BotStyles}>
                  <Text style={Fonts.BlueCont}>Stop Name</Text>
                  <Text style={Fonts.BlueCont}>Stop Number</Text>
                </View>
            </View>
            <ScrollView style={BusRouteStyles.ScrollView}>

              {/* Bus Stop */}
              <TouchableOpacity onPress={() => Actions.BusLastRoute(
              )}>

              <View style={BusRouteStyles.BusView}>

                <View style={BusRouteStyles.StopName}>
                <View style={BusRouteStyles.BusCont}>
                  <Image
                    style={BusRouteStyles.BusIcon}
                     source={require('../../assets/icons/bus-active.png')}
                     /> 
                </View>

                <View style={BusRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Metrotown Station @ Bay 12 </Text>
                </View>
                </View>

                <View style={BusRouteStyles.StopNum}>
                  <Text style={Fonts.AddressText}>60212</Text>
                </View>

              </View>
              </TouchableOpacity>
            {/* End of Bus Stop */}

              {/* Bus Stop */}
              <TouchableOpacity onPress={() => Actions.BusLastRoute()}>

              <View style={[BusRouteStyles.BusView, {backgroundColor:"#DBDBDB",}]}>

                <View style={BusRouteStyles.StopName}>
                <View style={BusRouteStyles.BusCont}>
                  <Image
                    style={BusRouteStyles.BusIcon}
                    source={require('../../assets/icons/bus-active.png')}
                    />
                </View>

                <View style={BusRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                 Eastbound Central Blvd @ 4500 Block </Text>
                </View>
                </View>

                <View style={BusRouteStyles.StopNum}>
                  <Text style={Fonts.AddressText}>52500</Text>
                </View>

              </View>
              </TouchableOpacity>
            {/* End of Bus Stop */}

              {/* Bus Stop */}
              <TouchableOpacity onPress={() => Actions.BusLastRoute()}>

              <View style={BusRouteStyles.BusView}>

                <View style={BusRouteStyles.StopName}>
                <View style={BusRouteStyles.BusCont}>
                  <Image
                    style={BusRouteStyles.BusIcon}
                    source={require('../../assets/icons/bus-active.png')}
                    />
                </View>

                <View style={BusRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Westbound Imperial St @ Waverley Ave </Text>
                </View>
                </View>

                <View style={BusRouteStyles.StopNum}>
                  <Text style={Fonts.AddressText}>52693</Text>
                </View>

              </View>
              </TouchableOpacity>
            {/* End of Bus Stop */}

              {/* Bus Stop */}
              <TouchableOpacity onPress={() => Actions.BusLastRoute()}>

              <View style={[BusRouteStyles.BusView, {backgroundColor:"#DBDBDB",}]}>

                <View style={BusRouteStyles.StopName}>
                <View style={BusRouteStyles.BusCont}>
                  <Image
                    style={BusRouteStyles.BusIcon}
                    source={require('../../assets/icons/bus-active.png')}
                    />
                </View>

                <View style={BusRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Westbound Imperial St @ Frederick Ave</Text>
                </View>
                </View>

                <View style={BusRouteStyles.StopNum}>
                  <Text style={Fonts.AddressText}>52694</Text>
                </View>

              </View>
              </TouchableOpacity>
            {/* End of Bus Stop */}

              {/* Bus Stop */}
              <TouchableOpacity onPress={() => Actions.BusLastRoute()}>

              <View style={BusRouteStyles.BusView}>

                <View style={BusRouteStyles.StopName}>
                <View style={BusRouteStyles.BusCont}>
                  <Image
                    style={BusRouteStyles.BusIcon}
                    source={require('../../assets/icons/bus-active.png')}
                    />
                </View>

                <View style={BusRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Westbound Imperial St @ Dow Ave</Text>
                </View>
                </View>

                <View style={BusRouteStyles.StopNum}>
                  <Text style={Fonts.AddressText}>52695</Text>
                </View>

              </View>
              </TouchableOpacity>
            {/* End of Bus Stop */}

              {/* Bus Stop */}
              <TouchableOpacity onPress={() => Actions.BusLastRoute()}>

              <View style={[BusRouteStyles.BusView, {backgroundColor:"#DBDBDB",}]}>

                <View style={BusRouteStyles.StopName}>
                <View style={BusRouteStyles.BusCont}>
                  <Image
                    style={BusRouteStyles.BusIcon}
                    source={require('../../assets/icons/bus-active.png')}
                    />
                </View>

                <View style={BusRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Southbound Sussex Ave @ Imperial St </Text>
                </View>
                </View>

                <View style={BusRouteStyles.StopNum}>
                  <Text style={Fonts.AddressText}>52696</Text>
                </View>

              </View>
              </TouchableOpacity>
            {/* End of Bus Stop */}

              {/* Bus Stop */}
              <TouchableOpacity onPress={() => Actions.BusLastRoute()}>

              <View style={BusRouteStyles.BusView}>

                <View style={BusRouteStyles.StopName}>
                <View style={BusRouteStyles.BusCont}>
                  <Image
                    style={BusRouteStyles.BusIcon}
                    source={require('../../assets/icons/bus-active.png')}
                    />
                </View>

                <View style={BusRouteStyles.Address}>
                  <Text 
                  numberOfLines={1}
                  style={Fonts.AddressText}>
                  Southbound Sussex Ave @ Hurst St</Text>
                </View>
                </View>

                <View style={BusRouteStyles.StopNum}>
                  <Text style={Fonts.AddressText}>52697</Text>
                </View>

              </View>
              </TouchableOpacity>
            {/* End of Bus Stop */}

            </ScrollView>
        </View>
        </SafeAreaView>
  )
};

//test