import {StyleSheet} from 'react-native';

var Fonts = StyleSheet.create({

// General  
Title: {
  fontSize: 40,
  fontFamily: "Assistant-Bold"
},
Heading: {
  fontSize: 20,
  marginTop: 40,
  fontFamily: "Assistant-Bold"
},
Body: {
  marginTop: 10,
  fontSize: 16,
  fontFamily: "Assistant-Regular"
},


// Taxis
TaxiTitle: {
  fontSize: 34,
  fontFamily: "Assistant-Bold"
},
TaxiHeading: {
  fontSize:18,
  fontFamily:"Assistant-Bold"
},


// Contact List
Name: {
  flex: 3,
  fontSize: 18,
  margin: 15,
  fontFamily: "Assistant-Regular"
},


// Navigation Bar
NavTitle: {
  flex: 4,
  fontSize: 25,
  fontFamily: "Assistant-Bold",
  textAlign: "center"
},
NavLink: {
  flex: 1,
  fontSize: 17,
  fontFamily: "Assistant-Regular",
  color: "#0983fb",
  padding: 5
},


// Text Inputs
InpLabel: {
  marginTop: 15,
  fontSize: 16,
  fontFamily:"Assistant-Regular"
},
Inp: {
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: 15,
  padding: 10,
  backgroundColor: "white",
  borderColor: "#D6D6D6",
  borderWidth:1
},


// Bus
BusRoute:{
  color:"white",
  fontFamily:"Assistant-SemiBold",
  fontSize:22,
  marginRight: 40
},
BlueCont:{
  color:"white",
  marginVertical: 5,
  fontSize: 14,
  fontFamily:"Assistant-SemiBold"
},

// Bus Schedules
ScheduleTitle:{
  fontFamily:"Assistant-Bold",
  fontSize:25,
  margin: 20
},
TimeText:{
  fontSize:20,
  margin:3,
  fontFamily:"Assistant-Bold"
},
TimeText2:{
  fontSize:20,
  margin:3,
  fontFamily:"Assistant-SemiBold"
},


// Skytrain
WhiteButText: {
  textAlign:"left",
  color:"white",
  fontFamily:"Assistant-Semibold",
  fontSize:20
},
BlackButText: {
  textAlign:"left",
  color:"#141414",
  fontFamily:"Assistant-Semibold",
  fontSize:20
},
SchedText:{
  marginTop:8,
  marginLeft:10,
  width:"100%",
  fontFamily:"Assistant-SemiBold"
},
SchedText2:{
  marginTop:8,
  marginLeft:10,
  fontFamily:"Assistant-Regular"
},
OtherHeading: {
  fontFamily:"Assistant-Bold",
  fontSize:22
},
OtherBody:{
  fontSize:16,
  padding:5,
  fontFamily:"Assistant-Regular"
},
OtherHeading2: {
  textAlign:"center",
  color:"white",
  fontFamily:"Assistant-SemiBold",
  fontSize:20
}

})

export default Fonts;