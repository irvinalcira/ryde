import {StyleSheet} from 'react-native';

var HomePageStyles = StyleSheet.create({

  HomeStyles:{
    flex:1,
    padding:15,
    marginTop:20
  },
  FavTab:{
    flex:2,
    flexDirection:"row",
    padding:15,
    textAlign:'center'
  },
  ContactTab:{
    flex:1,
    flexDirection:"row",
    padding:15
  },
  WelcomeText:{
    fontSize:40,
    fontFamily:"Assistant-Bold",
    padding:15
  },
  FavText:{
    fontSize:25,
    fontFamily:"Assistant-Bold",
    padding:15
  },
  FavTabText:{
    fontSize:15,
    fontFamily:"Assistant-SemiBold",
    padding:10,
    textAlign:"center"
  }

});

export default HomePageStyles;