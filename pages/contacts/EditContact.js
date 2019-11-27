import React,{useState,useEffect} from 'react';
import { View, Text, AsyncStorage, Button, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from '../../storage';

// Components
import CamRoll from '../../comps/CameraRoll';
import ImagePicker from 'react-native-image-picker';
import Divider from '../../comps/Divider';

// Styles
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import EditContactStyles from '../../styles/contacts/EditContactStyles';

function EditContact(obj) {

  const [showPic, SetShowPic] = useState(false);
  const [Photo,SetPhoto] = useState("");
  const [picText, SetPickText] = useState("Edit Profile Picture");
  const [FName,setFName] = useState(obj.firstname);
  const [LName,setLName] = useState(obj.lastname);
  const [PNumber,setPNumber] = useState(obj.phone);

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

   // GETTING CONTACTS USING ASYNC
   async function EditContact() {
    var data = await AsyncStorage.getItem("storage")
    data = JSON.parse(data);
    console.log(data);
    setContact(data.Contacts)
    data.Contacts[i].push({

      firstname:FName,
      lastname: LName,
      phone: PNumber
    }
    )
    // editedContact =
    //console.log("Contacts",Contact.Contacts);
  }

  return (

    <SafeAreaView style={EditContactStyles.Container}>
      <View style={EditContactStyles.Container}>

        
        {/* Nav Bar */}

        <View style={EditContactStyles.TopBar}>

          {/* Contacts */}
          <View style={EditContactStyles.BackNav}>
          <TouchableOpacity style={EditContactStyles.flexRow}
          onPress={() => {Actions.replace("Contacts");}}>

            <Image 
            style={EditContactStyles.BackArrow}
            source={require('../../assets/icons/backarrow-blue.png')}
            />
        <Text style={[Fonts.NavLink, {marginTop: -3}]}>Contacts</Text>
        </TouchableOpacity>
        </View>


          {/* Title */}
          <View style={EditContactStyles.TitleNav}>
          <Text style={Fonts.NavTitle}>Edit Contact</Text>
          </View>


          {/* Edit */}

          <View style={EditContactStyles.EditNav}>
          <TouchableOpacity style={EditContactStyles.flexRow}>
          <Text style={[Fonts.NavLink, EditContactStyles.EditText]} onPress={ () => { EditContact() }}>Save</Text>
                  </TouchableOpacity>
          </View>


        </View>

        {/* End of Nav Bar */}



        {/* Profile Pic */}

        {/* Camera Component */}
        <View style={EditContactStyles.CamContainer}>
        {showPic ? <Image source={{ uri: Photo.uri}} style={EditContactStyles.ProfPic}/>:<Image source={source=require('../../assets/icons/imagefill.png')}style={EditContactStyles.ProfPic}  />}
        <Button title={picText} onPress={handleChoosePhoto}/>
        </View>


        <View style={EditContactStyles.NameCont}>

        {/*First Name Input */}
        <TextInput style={[Fonts.Inp, EditContactStyles.EditInp]} placeholder="First Name" placeholderTextColor='gray'
        onChangeText = {(Text)=> setFName(Text)} value={FName}
        />

        {/*Last Name Input */}
        <TextInput style={[Fonts.Inp, EditContactStyles.EditInp]} placeholder="Last Name" placeholderTextColor='gray'
        onChangeText = {(Text)=> setLName(Text)} value={LName}
        />

        
        {/* Phone Number Input */}
        <TextInput style={[Fonts.Inp, EditContactStyles.EditInp]} keyboardType={'number-pad'} placeholder="Phone" placeholderTextColor='gray' maxLength={10}
        onChangeText = {(Text)=> setPNumber(Text)} value={PNumber}
        />

      </View>


      <View style={EditContactStyles.Spacer}></View>


      {/* Delete */}
      <View style={EditContactStyles.FWDivider}></View>
      <View>
      <TouchableOpacity>
        <Text style={Fonts.Delete}>Delete Contact</Text>
      </TouchableOpacity>
      </View>
      <View style={EditContactStyles.FWDivider}></View>

  </View>
</SafeAreaView>
  )
}

export default EditContact;