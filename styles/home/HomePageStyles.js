import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

var HomePageStyles = StyleSheet.create({

  Container:{
    flex:1,
    padding:15,
    marginTop:20,
    backgroundColor:"#EEEEEE"
  },

  FavContainer:{
    flex:1,
    flexDirection:"row",
  },

  FavBox:{
    backgroundColor:"#DBDBDB",    
    width: wp('100%'),
    height: hp('20%'),
  },

  ContactContainer:{
    flex:1,
    padding:15
  }
});

export default HomePageStyles;