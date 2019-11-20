import React, {useState,useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Button,AsyncStorage, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import Geolocation from '@react-native-community/geolocation';



//Components
import AddButton from '../../comps/AddButton';
import AddPopup from '../../comps/AddPopup';

//Styles
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Fonts from '../../styles/FontsStyles';
import Divider from '../../comps/Divider';
import { getFSInfo } from 'react-native-fs';





function Contacts(props) {

   const [Popup, setPopup] = useState(false);
   const [Contact,setContact] = useState([]);
   const [position, setPosition] = useState({latitude: 0,
    longitude: 0});
   Geolocation.getCurrentPosition(
    pos => {
    setPosition({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    });
  }
);

latitude = position.latitude;
longitude = position.longitude;


var location = 'https://www.google.com/maps/place/'+ latitude +'+' + longitude +'/?entry=im'



// console.log('phone #: ', phone, 'lat: ', latitude)

   
   async function GetContacts(){
    var data = await AsyncStorage.getItem("storage")
    data =  JSON.parse(data);
    console.log(data);
    setContact(data.Contacts)
    //console.log("Contacts",Contact.Contacts);
      }

    useEffect(() => {
        //console.log("effects2");
        GetContacts();
    },[props.navigation.state.params, Geolocation.requestAuthorization()]);
    //console.log("refresh", props.navigation.state.params);

    

  return (
    <SafeAreaView style={ContactsStyles.Container}>
      <View style={ContactsStyles.Container}>

          {/* Add Popup Component */}
          <AddPopup Popup={Popup} setPopup={setPopup} />

          {/* Title */}
          <View style={ContactsStyles.TitleCont}>

            <Text style={[Fonts.Title, {flex: 10}]}>Contacts</Text>
            <View style={ContactsStyles.TitleImg}>

            {/* Add Button Component */}
            <AddButton setPopup={setPopup}/>
            </View>
          </View>
          <ScrollView>
          {
    Contact.map((obj,i)=>{

                        return (
                          <View>
                          <TouchableOpacity>
          <View style={ContactsStyles.UserContainer}>
                
          {/* Name */}
          <Text style={[Fonts.Name]}>{obj.firstname} {obj.lastname}</Text>

          {/* Message/Call Container */}
              <View style={ContactsStyles.ImageCont}> 
                  {/* Message */}
                  <TouchableOpacity onPress={() =>  Communications.text( obj.phone ,'Hi '+obj.firstname+', can you pick me up? This is my location. ' + location )}>
                  {/* <TouchableOpacity onPress={() => Communications.text(, 'Test Text Here')}> */}
                  <View style={ContactsStyles.ImageBox}>
                    <Image style={ContactsStyles.Image} source={require('../../assets/icons/message.png')} />
                  </View>
                  </TouchableOpacity>
            
                  {/* Call */}
                  <TouchableOpacity>
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