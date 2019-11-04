import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import TabBar from '../../comps/TabBar';
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Divider from '../../comps/Divider';


function Contacts() {
  
  return (

    <SafeAreaView style={ContactsStyles.Contacts}>

      <View style={ContactsStyles.Contacts}>

        <View style={ContactsStyles.TitleCont}>
        <Text style={ContactsStyles.Title}>Call Contacts</Text>
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
          
          <Text style={ContactsStyles.Name}>Alyssa Martin</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[ContactsStyles.Image, {marginRight: 30}]}
          source={require('../../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.Container}>

          <Text style={ContactsStyles.Name}>Mom</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[ContactsStyles.Image, {marginRight: 30}]}
          source={require('../../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.Container}>

          <Text style={ContactsStyles.Name}>Irvin Alcira</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[ContactsStyles.Image, {marginRight: 30}]}
          source={require('../../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.Container}>

          <Text style={ContactsStyles.Name}>Jesse</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[ContactsStyles.Image, {marginRight: 30}]}
          source={require('../../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={ContactsStyles.Image}
          source={require('../../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

      <TabBar />
      </View>
      
    </SafeAreaView>
  )
}

export default Contacts;