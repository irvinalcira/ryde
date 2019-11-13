import React,{useState,useEffect} from 'react';
import { View, Text, Button, SafeAreaView, FlatList, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
 

import TaxisStyles from '../../styles/taxis/TaxisStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

function Taxis(props) {

    const [users, setData] = useState([]);
    const [input,setInput]=useState();
    const [name,setName]= useState("All Taxis");
    var Search=users.filter((obj,i)=>{
        if (input){
            return (obj.city===input)
        } else{
            return (obj.name)
        }
    });
    let data = [{
        value: 'Burnaby',
      }, {
        value: "Vancouver",
      },{
        value: 'Richmond',
      },{
        value: 'Surrey',
      },{
        value: 'Langley',
      }];
    var fetchData = async () => {
        const response = await fetch('http://localhost:8888/ryde/ryde.php');
        j = await response.json();
        setData(j);
        setName(input);
        console.log(name)
    }
    useEffect(() => {
        fetchData();
    });
    return (
        <SafeAreaView style={TaxisStyles.Container}>
            <View style={TaxisStyles.Container}>

                <Text style={Fonts.Title}>Taxis</Text>

                <Text style={Fonts.Heading}>Location</Text>
                <Text style={Fonts.Body}>Enter a location to view taxis in the surrounding area</Text>

                {/* This will be a Searchable Drop Down     */}
                    <Dropdown
                    // style = {TaxisStyles.}
                    label='City'
                    data={data}
                    textColor =	"rgba(0, 0, 0, .98)"
                    itemPadding = "10"
                    onChangeText={text => setInput(text)}
                    />


                <View style={TaxisStyles.TaxisView}>
                    
                    <Text style={[Fonts.Heading]}>{name}</Text>
                </View>

                <View style={TaxisStyles.TaxiButtonsContainer}>
                   <ScrollView style={TaxisStyles.ScrollViewContainer}>
                    {
                        Search.map((obj,i)=>{
                            return (
                                <TouchableOpacity style={Buttons.Taxi} onPress={() => Actions.SelectedTaxi(
                                    {
                                        ...obj,
                                        taxiname:obj.name,
                    
                                    }
                                )}>
                        <View style={Buttons.IconCont}>
                            <Image
                                style={Buttons.Img}
                                source={require('../../assets/icons/taxi.png')}
                            />
                        </View>

        
                        <View style={Buttons.TextCont}>
                            <Text style={Buttons.TaxiText}>
                                {obj.name}
                        </Text>
                        </View>

                        <View style={Buttons.IconCont}>
                            <Image
                                style={Buttons.ArrowImg}
                                source={require('../../assets/icons/arrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    

                            )
                        })
                    }
                   </ScrollView>

                </View>


            </View>
        </SafeAreaView>
    )
};

export default Taxis;