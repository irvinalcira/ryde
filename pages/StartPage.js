import React,{useState,useEffect} from 'react';
import { View, Text, AsyncStorage, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from "react-native-animatable";


import {Actions} from 'react-native-router-flux';

import data from '../storage';

//style
import StartPageStyles from '../styles/StartPageStyles';
import Fonts from '../styles/FontsStyles';
import Buttons from '../styles/ButtonsStyles';


export default function StartPage(){    

    Animatable.initializeRegistryWithDefinitions({
        logo: {
            from: {
                opacity:0,
                top:-150
            },
            to: {
                opacity:1,
                top:0,
            }
          },
          fadeIn: {
            from: {
                    opacity:0,
            },
            to: {
                opacity:1,
            },
          },

      });

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

                {/* RYDE */}
                
                    <Animatable.View animation="logo" easing={'ease-in-out'} iterationCount={1}> 
                        {/*  LOGO */}
                        <View style={StartPageStyles.Logo}>
                            <Image style={{width: 150, height: 150}} source={require('../assets/icons/ryde-icon.png')}/>
                        </View>
                        {/* RYDE LOGO TEXT */}
                        <Animatable.View style={StartPageStyles.Title} animation='zoomIn' duration={1000} delay={1000}>
                            <Text style={Fonts.Title}>Ryde</Text>
                        </Animatable.View>
                        {/* SLOGAN */}
                        <Animatable.View animation='zoomIn' delay={1850}>
                            <View style={[StartPageStyles.Body, {alignItems:'center'}]}>
                                <Text style ={[Fonts.Body, {marginBottom:15}]}>
                                Your All in One Transportation App
                                </Text>
                            </View> 
                        </Animatable.View>
                    </Animatable.View>

                {/* END OF RYDE */}

                {/* TEXT INPUT AND BUTTON */}

                    <Animatable.View style={{alignItems:'center', marginTop:50}} animation='fadeInDown' delay={3000}>
                        <TextInput style={[StartPageStyles.Inp]} 
                            placeholder="What's your name?" 
                            placeholderTextColor="grey"
                            onChangeText = {(Text) => setUserName(Text)}
                        />    
                        </Animatable.View>

                    <Animatable.View style={{marginTop:50,marginBottom:50}}animation='flipInX' delay={3000}>

                        <TouchableOpacity style={StartPageStyles.Button} onPress={ async () => {  checkName()    } }>
                            <Text style={Buttons.MainText}>Get Started</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                {/* END OF TEXT INPUT AND BUTTON */}
            </View>
            </SafeAreaView>
    )
}
