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
    marginTop:20,
    backgroundColor:"#EEEEEE"
  },

  FavContainer:{
    // backgroundColor:'blue',
    flexDirection:"row",
  },

  FavBox:{
    backgroundColor:"#DBDBDB",    
    width: wp('100%'),
    height: hp('30%'),
    padding:15,
    alignItems:'center',
  
  },

  ContactContainer:{
    flex:1,
    paddingHorizontal:15
  }
});

export default HomePageStyles;