import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import TabBar from '../comps/TabBar';
import ContactsStyles from '../styles/ContactStyles';


function Contacts() {
  
  return (

    <SafeAreaView style={ContactsStyles.Contacts}>

      <View style={ContactsStyles.Contacts}>

        <Text style={ContactsStyles.Title}>Call Contacts</Text>

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.FirstContainer}>

          <Text style={ContactsStyles.Name}>Alyssa Martin</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[ContactsStyles.Image, {marginRight: 30}]}
          source={require('../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={ContactsStyles.Image}
          source={require('../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.Container}>

          <Text style={ContactsStyles.Name}>Mom</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[ContactsStyles.Image, {marginRight: 30}]}
          source={require('../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={ContactsStyles.Image}
          source={require('../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        {/* Contact */}
        <TouchableOpacity>
        <View style={ContactsStyles.Container}>

          <Text style={ContactsStyles.Name}>Irvin Alcira</Text>

          <View style={ContactsStyles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[ContactsStyles.Image, {marginRight: 30}]}
          source={require('../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={ContactsStyles.Image}
          source={require('../assets/icons/phone.png')}
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