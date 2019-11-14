import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Button, AsyncStorage } from 'react-native';

//Components
import AddButton from '../../comps/AddButton';
import AddPopup from '../../comps/AddPopup';

//Styles
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Fonts from '../../styles/FontsStyles';
import Divider from '../../comps/Divider';

function Contacts() {

   const [Popup, setPopup] = useState(false);
  //  console.log(Popup);

  const ReadContact = async()=>{
    var obj = {
        key:"contact_read",
        data:{}
    }

    var r = await AsyncStorage.getItem(obj);

    var dbusers = JSON.parse(r.data.firstname);
    console.log("read",dbusers);
    setUsers(dbusers.data);
}
 
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
            
          
          {/* Contact */}
            <TouchableOpacity>
                <View style={ContactsStyles.UserContainer}>
                      
                  {/* Name */}
                  <Text style={Fonts.Name}>Irvin Alcira</Text>

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
          {/* End of Contact */}



          {/* Contact */}
          <TouchableOpacity>
                <View style={ContactsStyles.UserContainer}>
                      
                  {/* Name */}
                  <Text style={Fonts.Name}>Shenis Macabenta</Text>

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
          {/* End of Contact */}



          {/* Contact */}
          <TouchableOpacity>
                <View style={ContactsStyles.UserContainer}>
                      
                  {/* Name */}
                  <Text style={Fonts.Name}>Abhimannyu Shaktivel</Text>

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
          {/* End of Contact */}



          {/* Contact */}
          <TouchableOpacity>
                <View style={ContactsStyles.UserContainer}>
                      
                  {/* Name */}
                  <Text style={Fonts.Name}>Bin Im</Text>

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
          {/* End of Contact */}

          {/* Contact */}
          <TouchableOpacity>
                <View style={ContactsStyles.UserContainer}>
                      
                  {/* Name */}
                  <Text style={Fonts.Name}>Bin Im</Text>

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
          {/* End of Contact */}


      </View>  
    </SafeAreaView>
  )
}

export default Contacts;