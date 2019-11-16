import React, {useState,useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Button,AsyncStorage, ScrollView } from 'react-native';

//Components
import AddButton from '../../comps/AddButton';
import AddPopup from '../../comps/AddPopup';

//Styles
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Fonts from '../../styles/FontsStyles';
import Divider from '../../comps/Divider';

function Contacts(props) {

   const [Popup, setPopup] = useState(false);
   const [Contact,setContact] = useState([]);
   
   async function GetContacts(){
    var data = await AsyncStorage.getItem("storage")
    data =  JSON.parse(data);
    console.log(data);
    setContact(data.Contacts)
    //console.log("Contacts",Contact.Contacts);
      }
      useEffect(() => {
        //console.log("effects");
        GetContacts();
    },[]);


    useEffect(() => {
        //console.log("effects2");
        GetContacts();
    },[props.navigation.state.params]);
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
          <Text style={Fonts.Name}>{obj.firstname} {obj.lastname}</Text>

          {/* Message/Call Container */}
              <View style={ContactsStyles.ImageCont}> 
                  {/* Message */}
                  <TouchableOpacity>
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

// {
                       