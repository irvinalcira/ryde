import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
import Fonts from '../../styles/FontsStyles';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';

export default function SkyTrainRoute() {

  const [ direction, setDirection ] = useState("Southbound");
  const [ destination, setDestination ] = useState("Richmond BrigHouse");
  const [ opDirection, setOpDirection ] = useState("Northbound");
  const [ opDestination, setOpDestination ] = useState("WaterFront");

  const [trainRoute, setTrainRoute] = useState([]);

  var TrainStop = Stops.Stops;
  var TrainStopTime = StopTime;
  function GetTrainRoute() {
    const expo = TrainStop.filter(x => x.route_name === 'Canada Line' && x.direction_name === direction);
    setTrainRoute(expo);
  }
  // console.log(TrainStop.stop_id);

  function ChangeDirection() {
    if(direction === "Southbound"){
      setDirection("Northbound"), setDestination("Richmond BrigHouse"), setOpDirection("Southbound"), setOpDestination("WaterFront");
    } else ( setDirection("Southbound"), setDestination("WaterFront"), setOpDirection("Northbound"), setOpDestination("Richmond BrigHouse"));
    // console.log(direction)
    GetTrainRoute();
  }
  useEffect(() => {
    GetTrainRoute();
    ChangeDirection();
  }, []);

  return (
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

            <Text style={[Fonts.BusRoute, SkyTrainRouteStyles.NavTitle]}>Canada Line Station</Text>

          </View>


          <View style={SkyTrainRouteStyles.MidStyles}>
            <Image
              style={SkyTrainRouteStyles.WhiteTrain}
              source={require('../../assets/icons/whitebus.png')}
            />
            <TouchableOpacity
              onPress={() => ChangeDirection()}
            >
              <Image 
                style={{width:20, height:20}}
                source={require('../../assets/icons/switch.png')}
              />
            </TouchableOpacity>
            <Text style={Fonts.Destination}>{opDestination} - {destination}</Text>
            <Text style={Fonts.BlueCont}>{opDirection}</Text>
          </View>   
          <View style={SkyTrainRouteStyles.BotStyles}>
            {/* <Text style={Fonts.BlueCont}>Station Name</Text> */}

            {/* <Text style={Fonts.BlueCont}>Est Time</Text> */}
          </View>
        </View>
        <ScrollView style={SkyTrainRouteStyles.ScrollView}>
          {
            trainRoute.map((obj, i) => {
              
              var time =[];
              for(var j=0; j< StopTime.length; j++){
                if(obj.stop_id === StopTime[j].stop_id){
                  time.push(StopTime[j].arrival_time);
                }
              }
              // console.log(time);
              return (

                <View>
                  {/* Train Station */}
                  <TouchableOpacity onPress={() => Actions.FullSkyTrainSchedule(
                    {
                      time:time
                    }
        
                  )}>

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
                            {obj.stop_name}</Text>
                        </View>
                      </View>

                      {/* <View style={SkyTrainRouteStyles.TimeCont}> */}
                        {/* <Text style={Fonts.EstNum}>{time}</Text> */}

                        {/* <Text style={Fonts.EstTime}>MIN AWAY</Text> */}

                      {/* </View> */}

                    </View>
                  </TouchableOpacity>
                  {/* End of Train Station */}
                </View>
              )

            })

          }
        </ScrollView>


      </View>
    </SafeAreaView>
  )
};