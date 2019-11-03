import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import TabBar from '../comps/TabBar';
import styles from '../styles/ContactsStyles';
import Divider from '../comps/Divider';


function Contacts() {
  
  return (

    <SafeAreaView style={styles.Contacts}>

      <View style={styles.Contacts}>

        <View style={styles.TitleCont}>
        <Text style={styles.Title}>Call Contacts</Text>
        <View style={styles.TitleImg} >
        <TouchableOpacity>
        <Image 
        style={styles.Settings}
         source={require('../assets/icons/settings.png')}
         />
         </TouchableOpacity>
         </View>
        </View>
        
      
        {/* Contact */}
        <TouchableOpacity>
        <View style={styles.FirstContainer}>
          
          <Text style={styles.Name}>Alyssa Martin</Text>

          <View style={styles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[styles.Image, {marginRight: 30}]}
          source={require('../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={styles.Image}
          source={require('../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={styles.Container}>

          <Text style={styles.Name}>Mom</Text>

          <View style={styles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[styles.Image, {marginRight: 30}]}
          source={require('../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={styles.Image}
          source={require('../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={styles.Container}>

          <Text style={styles.Name}>Irvin Alcira</Text>

          <View style={styles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[styles.Image, {marginRight: 30}]}
          source={require('../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={styles.Image}
          source={require('../assets/icons/phone.png')}
          />
          </TouchableOpacity>
          
          </View>

        </View>
        </TouchableOpacity>
        {/* End of Contact */}

        <Divider />

        {/* Contact */}
        <TouchableOpacity>
        <View style={styles.Container}>

          <Text style={styles.Name}>Jesse</Text>

          <View style={styles.ImageCont}> 
          
          <TouchableOpacity>
          <Image 
          style={[styles.Image, {marginRight: 30}]}
          source={require('../assets/icons/message.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image 
          style={styles.Image}
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