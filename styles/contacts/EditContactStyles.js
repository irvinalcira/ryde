
var EditContactStyles = StyleSheet.create({
  Container: {
      flex:1,
      padding: 15,
      // backgroundColor: "#eee"
  },
  TopBar: {
    flexDirection: 'row',
    height:30,
  },
  BackArrow:{
    height:20,
    width:20,
    resizeMode:'contain'
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%"
  },
  BackNav: {
    flexDirection: "row",
    flex: 2,
  },
  TitleNav: {
    flex: 2,
  },
  EditNav: {
    flex: 2,
  },
  EditText: {
    justifyContent: "center",
    marginTop: -2,
    marginRight: 10,
    textAlign: "right"
  },
  IconCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  IconBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%"
  },
  Image: {
    height: 30,
    width: 31
  },
  CamContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20
  },
  ProfPic: {
    width: 120, 
    height: 120, 
    borderRadius:100,
    // backgroundColor: "pink"
  },
  NameCont: {
    marginTop: 10
  },
  EditInp: {
    borderWidth: 0,
    backgroundColor: "#fff"
  }
  
  
  })
  
  export default EditContactStyles;