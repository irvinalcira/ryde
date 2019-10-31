import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { Text, View, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import styles from '../styles/AppStyles';

//import tabs here

//


function Navtab(){

    const TabNavigator = createBottomTabNavigator({
        Home: HomeScreen,
        BusSchedule: BusScheduleScreen,
        SkyTrainSchedule: SkyTrainScheduleScreen,
        FindaTaxi: FindaTaxiScreen,
        CallaFriend: CallaFriendScreen
    });

    return (

        <View Style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            
            <TouchableHighlight>
                
                <Image
                    source={require('../assets/nav/home.png')}
                />

            </TouchableHighlight>
            <TouchableHighlight>
                
                <Image
                    source={require('../assets/nav/bus.png')}
                />

            </TouchableHighlight>
            <TouchableHighlight>
                
                <Image
                    source={require('../assets/nav/skytrain.png')}
                />

            </TouchableHighlight>
            <TouchableHighlight>
                
                <Image
                    source={require('../assets/nav/taxi.png')}
                />

            </TouchableHighlight>
            <TouchableHighlight>
                
                <Image
                    source={require('../assets/nav/contact.png')}
                />

            </TouchableHighlight>
            
        </View>

    )
};

export default Navtab;