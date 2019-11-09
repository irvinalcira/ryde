import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Fonts from '../../styles/FontsStyles';
import Divider from '../../comps/Divider';



function Contacts() {
  
  return (

    <SafeAreaView style={ContactsStyles.Container}>

      <View style={ContactsStyles.Container}>

        <View style={ContactsStyles.TitleCont}>
        <Text style={[Fonts.Title, {flex: 10}]}>Contacts</Text>
        <View style={ContactsStyles.TitleImg} >
        <TouchableOpacity>
        <Image 
        style={ContactsStyles.Settings}
         source={require('../../assets/icons/settings.png')}
         />
         </TouchableOpacity>
         </View>
        </View>
        
      
        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.FirstContainer}>
          
          <Text style={Fonts.Name}>Alyssa Martin</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={[ContactsStyles.Image,]}
          source={require('../../assets/icons/message.png')}
          />
          </View>
          </TouchableOpacity>
    

          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </View>
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.UserContainer}>
          
          <Text style={Fonts.Name}>Mom</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={[ContactsStyles.Image,]}
          source={require('../../assets/icons/message.png')}
          />
          </View>
          </TouchableOpacity>
    

          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </View>
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.UserContainer}>
          
          <Text style={Fonts.Name}>Irvin Alcira</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={[ContactsStyles.Image,]}
          source={require('../../assets/icons/message.png')}
          />
          </View>
          </TouchableOpacity>
    

          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </View>
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.UserContainer}>
          
          <Text style={Fonts.Name}>Jesse M</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={[ContactsStyles.Image,]}
          source={require('../../assets/icons/message.png')}
          />
          </View>
          </TouchableOpacity>
    

          <TouchableOpacity>
          <View style={ContactsStyles.ImageBox}>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </View>
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

      

      </View>
      
    </SafeAreaView>
  )
}

export default Contacts;