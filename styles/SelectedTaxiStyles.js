import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var SelectedTaxiStyles = StyleSheet.create({
    Container: {
        flex:1,
        width: wp('100%'),
        height:hp('100%'),

        // backgroundColor:'lightgreen'
    },

    FullPageContainer: {
        width: wp('100%'),
        height:hp('89%'),
        // backgroundColor:'lightgreen'
    },

    BackButton:{
        position:'absolute',
        zIndex:1,
        left:20,
        top:30
    },

    BackIcon:{
        height:35,
        width:35
    },

    TaxiImageContainer: {
        flex:1,
        backgroundColor:'gray',
    },

    TaxiInformationContainer: {
        flex:1.5,
        paddingHorizontal:15,
        // justifyContent:'center',

        
        // backgroundColor:'blue',

    },

    TaxiImg:{
        width:'100%',
        height:'100%',
    },

    TitleContainer: {
        marginBottom:10,
        flexDirection:'row',
    },

    InfoContainer: {
        marginBottom:10
    },

    Title: {
    fontSize: 35,
    fontFamily: "Assistant-Bold"
    },

    SubHeading: {
        fontSize:20,
        fontFamily:"Assistant-Bold"
    },
    Description: {
        fontSize:16,
        fontFamily:"Assistant-Regular"
    },

    FavoriteIcon:{
        height:30,
        width:30
    },

    TaxiName:{
        flex:7,
        alignSelf:'flex-start',
    },

    TaxiFavorite:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },

    CallBut: {
        marginTop: 10,
        height:55,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:"#3794da",
        borderRadius: 8
    },
    CallButText: {
        textAlign:"center",
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:26
    },



})

export default SelectedTaxiStyles;