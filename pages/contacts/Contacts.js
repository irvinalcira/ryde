import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";


//Components
import AddButton from '../../comps/AddButton';

//Styles
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Fonts from '../../styles/FontsStyles';
import Divider from '../../comps/Divider';
import ModalStyles from '../../styles/contacts/ModalStyles';


function Contacts() {

   const [Popup, setPopup] = useState(false);

   console.log(Popup);

 
  return (
    
    <SafeAreaView style={ContactsStyles.Container}>


      <View style={ContactsStyles.Container}>

      <Modal isVisible={Popup} hideModalContentWhileAnimating={true} backdropTransitionOutTiming={0} 
             onBackdropPress={() => setPopup(false)} onSwipeComplete={() => setPopup(false)} swipeDirection="down"
             animationInTiming={550} animationOutTiming={850}>
        <View style={ModalStyles.Container}>  

          <View style={ModalStyles.ImgCont}>
            <Image style={ModalStyles.Img}source={require('../../assets/icons/swipe.png')}/>
          </View>

          <Text style={ModalStyles.Heading}>Add Contact</Text>

          <TouchableOpacity style={ModalStyles.TextCont}
          onPress={ () => { setPopup(false), Actions.AddContact() } }>
            <Text style={ModalStyles.Text}>Manually Add Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ModalStyles.TextCont} onPress={() => setPopup(false)}>
            <Text style={ModalStyles.Text}>Import Contact From Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ModalStyles.TextCont} onPress={()=>{setPopup(false)}}>
            <Text style={[ModalStyles.Text, ModalStyles.CancelText]}>Cancel</Text>
          </TouchableOpacity>
        </View>
       </Modal>

        <View style={ContactsStyles.TitleCont}>
        <Text style={[Fonts.Title, {flex: 10}]}>Contacts</Text>
        <View style={ContactsStyles.TitleImg} >

          <AddButton setPopup={setPopup}/>

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
          style={ContactsStyles.Image}
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