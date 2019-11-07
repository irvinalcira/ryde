
import {StackNavigator} from 'react-navigation';

export default StackNavigator({ 
  Bus: {

    screen: FavTaxi,
  
  },
  
  SkyTrain:{ 
    
    screen: FavTrain, 
  
  },

  Taxi:{

    screen: FavTaxi,

  }
  
});