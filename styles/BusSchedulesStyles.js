import {StyleSheet} from 'react-native';

var styles=StyleSheet.create({
    busstyles:{
        flex:1,
        padding:10,
        paddingTop: 40
    },
    buschedfont:{
    fontSize:40,
    marginTop: -20,
    fontFamily:"Assistant-Bold"
    },
    findbusfont:{
        fontSize:25,
        paddingTop:10,
        fontFamily:"Assistant-Bold"
    },
    searchbusfont:{
        paddingTop:5,
        fontSize:16,
        fontFamily:"Assistant-Regular"
    },
    secondview:{
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:15,
        padding:10,
        backgroundColor:"white",
        borderColor:"#D6D6D6",
        borderWidth:1,
    },
    firstbutton:{
        marginTop: 30,
        padding:15,
        backgroundColor:"#4FA1CB",
    },
    firstbuttontxt:{
        textAlign:"center",
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:18

    },
    viewbusstyle:{
        fontSize:25,
        paddingTop:10,
        fontFamily:"Assistant-Bold"
    },
    viewbusfont:{
        fontSize:21,
        paddingTop:30,
        fontFamily:"Assistant-Bold"
    },
    typeinfont:{
        marginTop:10,
        fontSize:13,
        fontFamily:"Assistant-Regular"
    },

    thirdview:{
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:9,
        padding:10,
        backgroundColor:"white",
        borderColor:"#D6D6D6",
        borderWidth:1
    },
    secondbuttontxt:{
        textAlign:"center",
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:18
    },
    secondbutton:{
        marginTop: 30,
        padding:15,
        backgroundColor:"#3971B3",
    },
    barstyles:{
        width:"110%",
        height:70,
    },
    imgstyles:{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
    },
    ImageStyle: {
        marginLeft: 300,
        marginTop: -30,
        resizeMode : 'stretch',
        height: 25,
        width: 25,
    },
})

export default styles;