import React,{useState,useEffect} from 'react';
import { View, Text, AsyncStorage, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';

import {Actions} from 'react-native-router-flux';

import data from '../storage';

//style
import StartPageStyles from '../styles/StartPageStyles';
import Fonts from '../styles/FontsStyles';
import Buttons from '../styles/ButtonsStyles';


export default function StartPage(){    

    const [Name, setUserName] = useState('');

    async function UpdateUserName(){
        var datanew = await AsyncStorage.getItem("user");
        if(!datanew){
            datanew = data;
        } else {
            datanew = JSON.parse(datanew)
        }
        console.log(datanew);
        datanew.UserName = Name;

        AsyncStorage.setItem("user",JSON.stringify(datanew));
        console.log(datanew);

    }

    async function checkName(){
          if (Name === ''){
            alert('You must enter a name')
          }  else {
            await UpdateUserName(); 
            Actions.reset('HomePage'); 
        
          }
    }
    // useEffect(() => {
    //   UpdateUserName()
    //     },[]);

    return(

            <SafeAreaView style={[StartPageStyles.Container]}>


                <View style={{alignItems: "center", marginTop: "20%"}}>
                <Image
                style={{width: 150, height: 150}}
                source={require('../assets/icons/ryde-icon.png')}
                />

                <Text style={Fonts.Title}>Welcome to Ryde</Text>
                </View>
                {/* <Text style={Fonts.Heading}>Enter your Name</Text> */}
                
                <View style={{alignItems: "center"}}>
                <Text style ={[Fonts.Body, {marginBottom:15}]}>Enter your name below so you can start adding your favorite Buses, SkyTrains, Taxis and view your saved Contacts straight from the home page!</Text>
                </View>
                <TextInput style={Fonts.Inp} 
                            placeholder="Your Name Here" 
                            placeholderTextColor="grey"
                            onChangeText = {(Text) => setUserName(Text)}
                           />             

                <TouchableOpacity style={Buttons.Main}
                                     onPress={ async () => {
                                        checkName()
                                        // forceUpdate();                                      
                                       }
                                    }
                                    >
                    <Text style={Buttons.MainText}>Something</Text>
                </TouchableOpacity>
            </SafeAreaView>
    )
}
