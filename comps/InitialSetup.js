import React,{useState,useEffect} from 'react';
import { View, 
         Text, 
         AsyncStorage,
         SafeAreaView, 
         TouchableOpacity,
         TextInput 
        } from 'react-native';

import {Actions} from 'react-native-router-flux';


import data from '../storage';

//style
import HomePageStyles from '../styles/home/HomePageStyles';
import Fonts from '../styles/FontsStyles';
import Buttons from '../styles/ButtonsStyles';


export default function InitialSetup(){    

    const [Name, setUserName] = useState('');

    async function UpdateUserName(){
        var datanew = await AsyncStorage.getItem("storage");
        if(!datanew){
            datanew = data;
        } else {
            datanew = JSON.parse(datanew)
        }
        console.log(datanew);
        datanew.UserName = Name;

        AsyncStorage.setItem("storage",JSON.stringify(datanew));
        console.log(datanew);

    }
    // useEffect(() => {
    //   UpdateUserName()
    //     },[]);

    return(
       
            <View style={HomePageStyles.Container}>

                <Text style={Fonts.Title}> Welcome </Text>

                <TextInput style={Fonts.Inp} 
                            placeholder="Your Name" 
                            placeholderTextColor="grey"
                            onChangeText = {(Text) => setUserName(Text)}
                           />             

                <TouchableOpacity style={Buttons.Main}
                                     onPress={ async () => {
                                        await UpdateUserName(); 
                                        Actions.reset('HomePage'); 
                                        // forceUpdate();                                      
                                       }
                                    }
                                    >
                    <Text style={Buttons.MainText}>Submit</Text>
                </TouchableOpacity>
            </View>
    )
}
