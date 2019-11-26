import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import Communications from 'react-native-communications';

//styles
import AddPopupStyles from '../styles/comps/AddPopupStyles';

export default function ContactPopup(props,{firstname, lastname, phone}){

  console.log(props.phone, props.firstname, props.lastname);

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

        <Text style={AddPopupStyles.Heading}>{props.firstname}{props.lastname}</Text>

          <TouchableOpacity style={AddPopupStyles.TextCont}
                            onPress = {() => Communications.phonecall( props.phone , true)}        
          >
            <Text style={AddPopupStyles.Text}>Call {props.firstname}{props.lastname}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont}
                            onPress={()  => Communications.text( props.phone, 'Hey ' + props.firstname + ', im in need of a Ryde. Are you able to pick me up? This is my current location: ' )}
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
