import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import FavStyles from '../../styles/home/FavStyles';
import Communications from 'react-native-communications';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import Contacts from '../contacts/Contacts';

export default function FavTaxi(){

  return(
    <View style={FavStyles.CompBox}>

      {/* <Text style={Fonts.Body}>
        Start by adding your favourite taxis for quick access. You can edit, add, or remove favorites anytime.
      </Text> */}
    
    <View style={FavStyles.FavCont}>

      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.TaxiIcon}
              source={require('../../assets/icons/taxi-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              Vancouver Taxi
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
              (604) 871-1111
            </Text> 
          </View>
        </View>

          {/* Call Now */}
          <View style={FavStyles.CallCont}>
          <Image
              style={FavStyles.PhoneIcon}
              source={require('../../assets/icons/phone.png')}
            />   
            <Text style={FavStyles.TaxiCall}>CALL NOW</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}

      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.TaxiIcon}
              source={require('../../assets/icons/taxi-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              Bonny's Taxi
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
              (604) 451-1111
            </Text> 
          </View>
        </View>

          {/* Call Now */}
          <View style={FavStyles.CallCont}>
          <Image
              style={FavStyles.PhoneIcon}
              source={require('../../assets/icons/phone.png')}
            />   
            <Text style={FavStyles.TaxiCall}>CALL NOW</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}

      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.TaxiIcon}
              source={require('../../assets/icons/taxi-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              Aldergrove-Langley Taxi
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
              (604) 530-4444
            </Text> 
          </View>
        </View>

          {/* Call Now */}
          <View style={FavStyles.CallCont}>
          <Image
              style={FavStyles.PhoneIcon}
              source={require('../../assets/icons/phone.png')}
            />   
            <Text style={FavStyles.TaxiCall}>CALL NOW</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}

      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.TaxiIcon}
              source={require('../../assets/icons/taxi-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              Kimber Cabs
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
              (604) 278-2155
            </Text> 
          </View>
        </View>

          {/* Call Now */}
          <View style={FavStyles.CallCont}>
          <Image
              style={FavStyles.PhoneIcon}
              source={require('../../assets/icons/phone.png')}
            />   
            <Text style={FavStyles.TaxiCall}>CALL NOW</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}

      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.TaxiIcon}
              source={require('../../assets/icons/taxi-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              Pacific Cabs
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
              (604) 533-3333
            </Text> 
          </View>
        </View>

          {/* Call Now */}
          <View style={FavStyles.CallCont}>
          <Image
              style={FavStyles.PhoneIcon}
              source={require('../../assets/icons/phone.png')}
            />   
            <Text style={FavStyles.TaxiCall}>CALL NOW</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}


    </View>
    



    </View>
  )
}