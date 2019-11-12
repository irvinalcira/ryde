import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


var Buttons = StyleSheet.create({
  
  // General Buttons
  Main: {
    marginTop: 15,
    height:50,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#3971b3",
    borderRadius: 3
  },
  MainText: {
    textAlign:"center",
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:17
  },
  Alt: {
    marginTop: 15,
    height:50,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#4FA1CB",
    borderRadius: 3
  },
  TextAltColor: {
    color:"#1970be",
  },

  // Taxis
  Taxi: {
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:75,
    backgroundColor:"#ffffff",
    borderRadius: 6
  },
  TaxiText: {
    textAlign:"left",
    color:"#141414",
    fontFamily:"Assistant-Semibold",
    fontSize:20
  },
  IconCont: {
   flex:1,
    justifyContent:'center',
    alignItems:'center',
    height: "100%"
  },
  TextCont: {
    flex:4.5,
    justifyContent:'center',
    height: "100%"
  },
Img: {
    width:22,
    height:22
  },
  ArrowImg: {
    width:12,
    height:12,
  },  

  CallBut: {
    marginTop: 15,
    height:80,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#3794da",
    borderRadius: 3
  },

  CallButText: {
    textAlign:"center",
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:25
  },

  // Skytrains
  SkyTrain: {
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:75,
    backgroundColor:"#235CA3",
    borderRadius: 8,
  },

  // HomePage
  HomePageButton: {
    padding: 15,    
    position:'relative',
  },

  // Schedules
  SchedCont: {
    marginRight: -20,
    marginLeft: -20
  },
  TouchWrap:{
    alignItems:"center",
    backgroundColor:"#3794DA",
    height:50,
    justifyContent:"space-around",
    borderBottomRightRadius:6,
    borderBottomLeftRadius:6,
    flexDirection:"row",
    
},
TouchText:{
    textAlign:"center",
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:20,
    marginRight:50
},
time:{
    height:35,
    width:35
},
next:{
    height:30,
    width:30
},
})

export default Buttons;