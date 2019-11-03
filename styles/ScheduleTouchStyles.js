
import {StyleSheet} from 'react-native';


var ScheduleTouch = StyleSheet.create({
    TouchWrap:{
        alignItems:"center",
        backgroundColor:"#3794DA",
        height:50,
        justifyContent:"space-around",
        marginLeft:-20,
        marginRight:-20,
        marginTop:10,
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

export default ScheduleTouch;