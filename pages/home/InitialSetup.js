import React,{useState,useEffect} from 'react';
import { View, 
         Text, 
         AsyncStorage,
         SafeAreaView, 
         TextInput 
        } from 'react-native';

import data from '../../storage';

//style
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';


function InitialSetup(){

    const [userName, setUserName] = useState("");

    async function UpdateUserName(){
        var datanew = await AsyncStorage.getItem("storage");
        if(!datanew){
            datanew = data;
        }else {
            datanew = JSON.parse(datanew)
        }
            datanew.UserName.push({
                username:userName
            })
            AsyncStorage.setItem("storage",JSON.stringify(datanew));
            console.log(datanew);
    }

    return(
        <SafeAreaView style={HomePageStyles.Container}>
            <View style={HomePageStyles.Container}>

                <Text style={Fonts.Title}> Welcome, </Text>
                <TextInput style={Fonts.Inp} 
                            placeholder="Your Name" 
                            placeholderTextColor="grey"
                            onChangeText = {(Text) => setUserName(Text)} value={userName}
                            >                                
                            </TextInput>

                <TouchableOpacity style={Buttons.Main}>
                                    onPress={() => {
                                        UpdateUserName();
                                    }}
                    <Text style={Buttons.MainText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default InitialSetup;