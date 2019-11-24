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
  fontSize: 28,
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
  fontFamily: "Assistant-Semibold",
},
Delete: {
  fontSize: 20,
  marginTop: 20,
  marginBottom: 20,
  fontFamily: "Assistant-Regular",
  color: "red",
  textAlign: "center"
},


// Navigation Bar
NavTitle: {
  flex: 4,
  fontSize: 20,
  fontFamily: "Assistant-SemiBold",
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
  marginTop: 5,
  height:45,
  padding:10,
  color:'black',
  backgroundColor: "white",
  borderColor: "#D6D6D6",
  borderWidth:1
},


// Bus Route
BusRoute:{
  color:"white",
  fontFamily:"Assistant-Bold",
  fontSize:22,
  marginRight: 40
},
BlueCont:{
  color:"white",
  marginVertical: 5,
  fontSize: 16,
  fontFamily:"Assistant-SemiBold"
},
Destination: {
  color:"white",
  marginVertical: 5,
  fontSize: 18,
  fontFamily:"Assistant-Bold"
},
AddressText: {
  color: "#3971B3",
  fontSize: 20,
  fontFamily: "Assistant-SemiBold",
},

// Schedules
BusNum: {
  color: "white",
  fontSize: 45,
  fontFamily: "Assistant-Bold"
},
BusName: {
  color: "white",
  fontSize: 20,
  fontFamily: "Assistant-SemiBold",
  marginLeft: 10
},
Time: {
  fontSize: 20,
  fontFamily: "Assistant-SemiBold",
  paddingBottom: 5
},
LineName: {
  marginTop: 10,
  color: "white",
  fontSize: 34,
  fontFamily: "Assistant-SemiBold",
},
LineDetail: {
  fontSize: 16,
  fontFamily: "Assistant-SemiBold",
  marginLeft: 15,
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


// test


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
},
EstNum: {
  color: "#3971B3",
  fontSize: 35,
  fontFamily: "Assistant-Bold",
},
EstTime: {
  color: "#3971B3",
  fontSize: 12,
  fontFamily: "Assistant-SemiBold",
},

//HomePage
FavHeading:{
  fontSize:25,
  fontFamily:"Assistant-Bold"
},

ContactIconFont:{
  fontSize:25,
  fontFamily: "Assistant-Bold",
  color:"white",
},

ContactNameFonts:{
  fontSize:15,
  fontFamily:"Assistant-SemiBold",
  color:"#000000"
},

FavButtonText:{
  color:"#999999",
  fontFamily: "Assistant-Bold"
},

FavButtonTextPressed:{
  color:'#000000',
  fontFamily: "Assistant-Bold",
  borderBottomWidth: 1,
  borderBottomColor: '#235CA3'
}

})

export default Fonts;