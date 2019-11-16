{
    Contact.Contacts.map((obj,i)=>{
                        return (
                          <View>
                          <TouchableOpacity>
          <View style={ContactsStyles.UserContainer}>
                
          {/* Name */}
          <Text style={Fonts.Name}>{obj.firstname} {obj.lastname}</Text>

          {/* Message/Call Container */}
              <View style={ContactsStyles.ImageCont}> 
                  {/* Message */}
                  <TouchableOpacity>
                  <View style={ContactsStyles.ImageBox}>
                    <Image style={ContactsStyles.Image} source={require('../../assets/icons/message.png')} />
                  </View>
                  </TouchableOpacity>
            
                  {/* Call */}
                  <TouchableOpacity>
                  <View style={ContactsStyles.ImageBox}>
                    <Image style={ContactsStyles.Image} source={require('../../assets/icons/phone.png')} />
                  </View>
                  </TouchableOpacity>
              </View>
          {/* End of Message/Call Container */}
        </View>

    </TouchableOpacity>
                <Divider />
                </View>

                        )
                        })
                    }