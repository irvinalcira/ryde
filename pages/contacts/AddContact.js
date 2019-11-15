import React,{useState,useEffect} from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from '../../storage';



// Components
import Cam from '../../comps/CameraRoll';

// Styles
import AContactStyles from '../../styles/contacts/AddContactStyles';
import Fonts from '../../styles/FontsStyles';

function AddContact(props) {

  const [FName,setFName] = useState('');
  const [LName,setLName] = useState('');
  const [PNumber,setPNumber] = useState('');
  const [Contact,setContact] = useState([]);

   async function SetInfo(){
    var checkdata = await AsyncStorage.getItem("storage");
    checkdata =  JSON.parse(checkdata)
    if (checkdata.Contacts != ""){
      AsyncStorage.setItem("storage",JSON.stringify(checkdata));
      console.log("Has something inside",checkdata.Contacts)
    }else {
      AsyncStorage.setItem("storage",JSON.stringify(data));
      console.log("Its empty")
    }

    }
    
 async function UpdateContacts(){
    var datanew = await AsyncStorage.getItem("storage");
    datanew =  JSON.parse(datanew)
      datanew.Contacts.push({
        firstname:FName,
        lastname:LName,
        phone:PNumber 
        })
      AsyncStorage.setItem("storage",JSON.stringify(datanew));
    console.log(datanew);
  }

  useEffect(() => {   
    SetInfo();
},[]);
  return (

    <SafeAreaView style={AContactStyles.Container}>
      <View style={AContactStyles.Container}>

        {/* Nav Bar */}

        <View style={AContactStyles.TopBar}>
        <TouchableOpacity onPress={() => Actions.pop()}>
        <Text style={Fonts.NavLink}>Cancel</Text>
        </TouchableOpacity>

        <Text style={Fonts.NavTitle}>New Contact</Text>

        <TouchableOpacity>
        <Text style={Fonts.NavLink} onPress={() => {
          UpdateContacts();
          Actions.pop();
          }}>Create</Text>
        </TouchableOpacity>
        </View>

        {/* End of Nav Bar */}


        {/* Add Contact */}

        {/* Camera Component */}
        <View style={AContactStyles.AddImgView}>
            <Cam uri={props.uri}/>
        </View>
       

        {/*First Name Input */}
        <Text style={Fonts.InpLabel}>First Name</Text>
        <TextInput style={Fonts.Inp} placeholder="John" placeholderTextColor='gray'
        onChangeText = {(Text)=> setFName(Text)} value={FName}
        />

        {/*Last Name Input */}
        <Text style={Fonts.InpLabel}>Last Name</Text>
        <TextInput style={Fonts.Inp} placeholder="Doe" placeholderTextColor='gray'
        onChangeText = {(Text)=> setLName(Text)} value={LName}
        />
        
        {/* Phone Number Input */}
        <Text style={Fonts.InpLabel}>Phone Number</Text>
        <TextInput
        style={Fonts.Inp} keyboardType={'number-pad'} placeholder="(604) 333-3333" placeholderTextColor='gray' maxLength={10}
        onChangeText = {(Text)=> setPNumber(Text)} value={PNumber}
        />

      </View>
    </SafeAreaView>
  )
}

export default AddContact;