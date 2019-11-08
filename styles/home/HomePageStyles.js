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
    // backgroundColor:'lightblue'
    
  },

  FavContainer:{
    // backgroundColor:'blue',
    flexDirection:"row",
    marginLeft:-15,
  },

  FavBox:{
    backgroundColor:"#DBDBDB",    
    width: '100%',
    padding:10,
    alignItems:'center',
    position: 'relative',
  },

  ContactContainer:{
    flexDirection:'row',
  },

  ContactBox:{
    flexDirection:'row',
    flex:1,
    marginLeft:-25,
    marginTop:-15
  },

  ContactIconBox:{    
    backgroundColor:"#235CA3", 
    height:60,
    width:60,
    borderRadius:150,
    alignItems:'center',
    justifyContent:'center',
    margin: 10,
  },

  ContactList:{
    alignItems:'center',
    justifyContent:'center'
  }

});

export default HomePageStyles;