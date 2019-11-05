import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var EContactsStyles = StyleSheet.create({
Contacts: {
    flex:1,
    padding: 15,
    marginTop: 20,
    width: wp('100%')
},
ImportBut: {
    marginTop: 50,
    height:50,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#4FA1CB",
    borderRadius: 3
},
ImportButText: {
    textAlign:"center",
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:17
},
ManualBut: {
    marginTop: 10,
    height:50,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#3971B3",
    borderRadius: 3
}
})

export default EContactsStyles;