import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Button, AsyncStorage, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import Geolocation from '@react-native-community/geolocation';


//Components
import AddButton from '../../comps/AddButton';
import AddPopup from '../../comps/AddPopup';
import EmptyContacts from './EmptyContacts';

//Styles
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Fonts from '../../styles/FontsStyles';
import Divider from '../../comps/Divider';


function Contacts(props) {

  // USE STATES
  const [Popup, setPopup] = useState(false);
  const [Contact, setContact] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });


  // USE EFFECT TO GET USER'S CURRENT LOCATION
  // useEffect(()=>{
  //   Geolocation.requestAuthorization();
  //   Geolocation.getCurrentPosition(
  //     pos => {
  //       setPosition({
  //         latitude: pos.coords.latitude,
  //         longitude: pos.coords.longitude
  //       });
  //     }
  //   );
  // },[]); 

  
  // SETTING THE GOOGLE MAPS LINK TO INCLUDE USER'S LOCATION 
  // latitude = position.latitude;
  // longitude = position.longitude;
  // var location = 'https://www.google.com/maps/place/' + latitude + '+' + longitude + '/?entry=im'


  // GETTING CONTACTS USING ASYNC
  async function GetContacts() {
    var data = await AsyncStorage.getItem("storage")
    data = JSON.parse(data);
    console.log(data);
    setContact(data.Contacts)
    //console.log("Contacts",Contact.Contacts);
  }

    // DELETE CONTACT FUNCTION

    async function DeleteContact(index){
      var c = Contact;
      console.log("this ", c);
      c.splice(index, 1);
      var data = await AsyncStorage.getItem("storage");
      parsedelete = JSON.parse(data);
      parsedelete.Contacts = c;
      await AsyncStorage.setItem("storage", JSON.stringify(parsedelete));
      GetContacts();
      console.log(Contact);
    }

  
  useEffect(() => {
    
    GetContacts();
  }, [props.navigation.state.params]);
  //console.log("refresh", props.navigation.state.params);


  

  return (
    <SafeAreaView style={ContactsStyles.Container}>
      <View style={ContactsStyles.Container}>

        {/* Add Popup Component */}
        <AddPopup Popup={Popup} setPopup={setPopup} />

        {/* Title */}
        <View style={ContactsStyles.TitleCont}>

          <Text style={[Fonts.Title, { flex: 10 }]}>Contacts</Text>
          <View style={ContactsStyles.TitleImg}>

            {/* Add Button Component */}
            <AddButton setPopup={setPopup} />
          </View>
        </View>


        <ScrollView>
          { Contact.length === 0 ? <EmptyContacts /> : null }

          {


            Contact.map((obj, i) => {

              return (
                <View>
                  <TouchableOpacity>
                    <View style={ContactsStyles.UserContainer}>

                      {/* Contact Name */}
                      <Text numberOfLines={1} style={[Fonts.Name]}> {obj.firstname} {obj.lastname} </Text>

                      <TouchableOpacity onPress={() => DeleteContact(i) }>
                         <Text>Delete</Text>
                      </TouchableOpacity>

                      {/* Message/Call Container */}
                      <View style={ContactsStyles.ImageCont}>
                        {/* Message */}
                        <TouchableOpacity onPress={()  => Communications.text(obj.phone, 'Hey ' + obj.firstname + ', im in need of a Ryde. Are you able to pick me up? This is my current location: ' + location)}
                              >
                          <View style={ContactsStyles.ImageBox}>
                            <Image style={ContactsStyles.Image} source={require('../../assets/icons/message.png')} />
                          </View>
                        </TouchableOpacity>

                        {/* Call */}
                        <TouchableOpacity onPress = {() => Communications.phonecall( obj.phone , true)}>
                          <View style={ContactsStyles.ImageBox}>
                            <Image style={ContactsStyles.Image} source={require('../../assets/icons/phone.png')} />
                          </View>
                        </TouchableOpacity>
                      </View>
                      {/* End of Message/Call Container */}
                    </View>

                  </TouchableOpacity>
                  <Divider />
                </View>

              )
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Contacts;