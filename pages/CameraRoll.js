import React,{ useState} from 'react';
import { View , Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';



export default function Cam() {
  const [showPic, SetShowPic] = useState(false);
   const [Photo,SetPhoto] = useState("");
   const [picText, SetPickText] = useState("Add Profile Picture")

  handleChoosePhoto = () => {
    const options = {
      noData: true,
      tintColor:'#1970bf'
    };

    ImagePicker.showImagePicker(options, response => {
      if (response) {
        SetPhoto(response);
        SetShowPic(true);
        SetPickText('Edit Profile Picture')
      }
      else {
        SetPickText('Add Profile Picture')
        SetShowPic(false);
        
      }
    });
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center' }}>
    {showPic ? <Image source={{ uri: Photo.uri}}style={{ width: 120, height: 120, borderRadius:100, margin:20}}/>:<Image source={source=require('../assets/icons/imagefill.png')}style={{ width: 120, height: 120, borderRadius:100, margin:20}}  />}
      <Button title={picText} onPress={handleChoosePhoto} />
    </View>
  );
}