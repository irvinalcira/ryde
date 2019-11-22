import React,{useState,useEffect} from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, SafeAreaView, Image, TextInput,Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from '../../storage';
import ImagePicker from 'react-native-image-picker';



// Components
import Cam from '../../comps/CameraRoll';

// Styles
import AContactStyles from '../../styles/contacts/AddContactStyles';
import Fonts from '../../styles/FontsStyles';

function AddContact(props) {
  const [showPic, SetShowPic] = useState(false);
  const [Photo,SetPhoto] = useState("");
  const [picText, SetPickText] = useState("Add Profile Picture")
  const [FName,setFName] = useState('');
  const [LName,setLName] = useState('');
  const [PNumber,setPNumber] = useState('');
  const [Contact,setContact] = useState([]);

  handleChoosePhoto = () => {
    const options = {
      noData: true,
      tintColor:'#1970bf'
    };

    ImagePicker.showImagePicker(options, response => {
      if (response) {
        SetPhoto(response);
        SetShowPic(true);
        SetPickText('Edit Profile Picture')
      }
      else {
        SetPickText('Add Profile Picture')
        SetShowPic(false);
        
      }
    });
  };
 async function UpdateContacts(){
    var datanew = await AsyncStorage.getItem("storage");
    if(!datanew){
      datanew = data;
    }else {
      datanew =  JSON.parse(datanew)
    }
      datanew.Contacts.push({
        firstname:FName,
        lastname:LName,
        phone:PNumber ,
        Image:Photo.uri
        })
      AsyncStorage.setItem("storage",JSON.stringify(datanew));
    console.log(datanew);
  }
//   useEffect(() => {
//   AsyncStorage.clear()
// },[]);
  return (

    <SafeAreaView style={AContactStyles.Container}>
      <View style={AContactStyles.Container}>

        {/* Nav Bar */}

        <View style={AContactStyles.TopBar}>
        <TouchableOpacity onPress={() => {
          Actions.replace("Contacts");
        }
        }>
        <Text style={Fonts.NavLink}>Cancel</Text>
        </TouchableOpacity>

        <Text style={Fonts.NavTitle}>New Contact</Text>

        <TouchableOpacity>
        <Text style={Fonts.NavLink} onPress={ async () => {
           await UpdateContacts();
          Actions.replace("Contacts");
          }}>Create</Text>
        </TouchableOpacity>
        </View>

        {/* End of Nav Bar */}


        {/* Add Contact */}

        {/* Camera Component */}
        <View style={AContactStyles.AddImgView}>
        <View style={AContactStyles.CamContainer}>
    {showPic ? <Image source={{ uri: Photo.uri}} style={AContactStyles.ProfPic}/>:<Image source={source=require('../../assets/icons/imagefill.png')}style={AContactStyles.ProfPic}  />}
      <Button title={picText} onPress={handleChoosePhoto}/>
    </View>
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