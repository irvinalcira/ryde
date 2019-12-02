import React,{useState,useEffect} from 'react';
import { View, Text, AsyncStorage, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';

import {Actions} from 'react-native-router-flux';

import data from '../storage';

//style
import HomePageStyles from '../styles/home/HomePageStyles';
import Fonts from '../styles/FontsStyles';
import Buttons from '../styles/ButtonsStyles';


export default function InitialSetup(){    

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

            <View style={[HomePageStyles.Container]}>

                {/* <Text style={Fonts.Title}>Ryde</Text> */}

                <View style={{alignItems: "center", marginTop: "20%"}}>
                <Image
                style={{width: 150, height: 150}}
                source={require('../assets/icons/ryde-icon.png')}
                />

                </View>
                {/* <Text style={Fonts.Heading}>Enter your Name</Text> */}
                
                <View style={{alignItems: "center"}}>
                <Text style ={[Fonts.Body, {marginBottom:15, width: "100%"}]}>Enter your name below so you can start adding your favorite Buses, SkyTrains, Taxis and view your saved Contacts straight from the home page!</Text>
                </View>
                <TextInput style={Fonts.Inp} 
                            placeholder="Your Name Here" 
                            placeholderTextColor="grey"
                            onChangeText = {(Text) => setUserName(Text)}
                           />             

                <TouchableOpacity style={Buttons.Main} onPress={ async () => {  checkName() } }  >
                    <Text style={Buttons.MainText}>Submit</Text>
                </TouchableOpacity>
            </View>
    )
}
