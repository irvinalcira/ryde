import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import Communications from 'react-native-communications';

//styles
import AddPopupStyles from '../styles/comps/AddPopupStyles';

export default function ContactPopup(props,{firstname, lastname, phone}){

  console.log(phone);

  var stringPhone = 
  JSON.stringify(phone);
  return(

    <Modal isVisible={props.Popup} hideModalContentWhileAnimating={true}
    backdropTransitionOutTiming={0}
    onBackdropPress={() => props.setPopup(false)}
    onSwipeComplete={() => props.setPopup(false)}
    swipeDirection="down"
    animationInTiming={550} animationOutTiming={850}>

      <View style={AddPopupStyles.Container}>

        <View style={AddPopupStyles.ImgCont}>

          <Image style={AddPopupStyles.Img}source={require('../assets/icons/swipe.png')}/>

        </View>

        <Text style={AddPopupStyles.Heading}>{firstname}{lastname}</Text>

          <TouchableOpacity style={AddPopupStyles.TextCont}
                            onPress = {() => Communications.phonecall( obj.phone , true)}        
          >
            <Text style={AddPopupStyles.Text}>Call {firstname}{lastname}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont}
                            onPress={()  => Communications.text(obj.phone, 'Hey ' + obj.firstname + ', im in need of a Ryde. Are you able to pick me up? This is my current location: ' + location)}
          >
            <Text style={AddPopupStyles.Text}>Text</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont}
            onPress={() => {props.setPopup(false)}}
          >
            <Text style={[AddPopupStyles.Text, AddPopupStyles.CancelText]}>
              Cancel
            </Text>
          </TouchableOpacity>

      </View>

    </Modal>

  )

}
