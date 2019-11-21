import {StyleSheet} from 'react-native';

var FavStyles = StyleSheet.create({
  CompBox:{
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: "center"
  },

  FavCont: {
    width: "100%",
    // backgroundColor: "pink",
  },
  FavPieceCont: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginBottom: 10
    // paddingLeft: "10%"
  },

  // For buses
  StopName: {
    flexDirection: "row",
    // backgroundColor: "pink",
    flex: 4,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  BusIcon: {
    width: 30,
    height: 35
  },
  Address: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: -10,
  },
  BusName: {
    color: "#3971B3",
    fontSize: 20,
    fontFamily: "Assistant-SemiBold",
  },
  RouteName: {
    color: "#3971B3",
    fontSize: 14,
    fontFamily: "Assistant-Regular",
    width: "90%",
  },
  TimeCont: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10
    // backgroundColor: "pink"
  }


});


export default FavStyles;