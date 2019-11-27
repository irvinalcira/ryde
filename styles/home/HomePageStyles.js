import {StyleSheet} from 'react-native';

var HomePageStyles = StyleSheet.create({

  Container:{
    flex:1,
    padding:15,
    marginTop:20,
    backgroundColor:'#eee'
    
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
    paddingTop:15,
    paddingBottom:15,
    // height: 275
  },

  CompContainer: {
    flex:3,
    width: '120%',
    left: '-10%'
  },

  ContactContainer:{
    width: "120%",
    marginLeft: -25,
   flex: 2
  },

  ContactHeader:{
    marginLeft: 25
  },

  ContactContent:{
    paddingLeft: 10
  },


  ContactBox:{
    flexDirection:'row',
    flex:1,
    width: "100%",
    marginRight: 50
  },

  ContactIconBox:{    
    backgroundColor:"#235CA3", 
    height:70,
    width:70,
    borderRadius:150,
    alignItems:'center',
    justifyContent:'center',
    margin: 10,
  },

  ContactList:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },

  CompTextBox:{
    minHeight: 100
  }

});

export default HomePageStyles;