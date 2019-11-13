import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";

//Styles
import AddPopupStyles from '../styles/comps/AddPopupStyles';


function AddPopup(props) {

    console.log(props.setPopup)
 
  return (
    
      <Modal isVisible={props.Popup} hideModalContentWhileAnimating={true} backdropTransitionOutTiming={0} 
             onBackdropPress={() => props.setPopup(false)} onSwipeComplete={() => props.setPopup(false)} swipeDirection="down"
             animationInTiming={550} animationOutTiming={850}>
        <View style={AddPopupStyles.Container}>  

          <View style={AddPopupStyles.ImgCont}>
            <Image style={AddPopupStyles.Img}source={require('../assets/icons/swipe.png')}/>
          </View>

          <Text style={AddPopupStyles.Heading}>Add Contact</Text>

          <TouchableOpacity style={AddPopupStyles.TextCont}
          onPress={ () => { props.setPopup(false), Actions.AddContact() } }>
            <Text style={AddPopupStyles.Text}>Manually Add Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont} onPress={() => props.setPopup(false)}>
            <Text style={AddPopupStyles.Text}>Import Contact From Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont} onPress={()=>{ props.setPopup(false)}}>
            <Text style={[AddPopupStyles.Text, AddPopupStyles.CancelText]}>Cancel</Text>
          </TouchableOpacity>
        </View>
       </Modal>
  )
}

export default AddPopup;