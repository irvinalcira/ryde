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
            <View style={[StartPageStyles.Container]}>

                <View style={StartPageStyles.Logo}>
                <Image
                style={{width: 150, height: 150}}
                source={require('../assets/icons/ryde-icon.png')}
                />
                </View>
                
                <View style={StartPageStyles.Title}>
                <Text style={Fonts.Title}>Ryde</Text>
                </View>
  
                
                <View style={StartPageStyles.Body}>
                <Text style ={[Fonts.Body, {marginBottom:15}]}>
                Ryde combines the main methods of transportation into one app. 
                It displays data of all bus routes and SkyTrain stations, taxis, and your important contacts.
                </Text>
                
                <Text style ={[Fonts.Body, {marginBottom:15}]}>Enter your first name below to get started</Text>
                </View>
                <TextInput style={Fonts.Inp} 
                            placeholder="First Name" 
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
                    <Text style={Buttons.MainText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
    )
}
