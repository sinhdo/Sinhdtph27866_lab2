import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuanLi from './Sceen/QuanLy'
import About from './Sceen/About'
import ProductList from './Sceen/index';

const Stack = createNativeStackNavigator();

const Home = (props) => {
  const nav = props.navigation;
  const list=[
            {id:1,name :'Bún bò Huế',price : 50000},
            {id:2,name :'Bánh cuốn',price : 30000},
            {id:3,name :'Phở boà',price : 60000},
        ];
  return (<View>
     <Image source={
                    {uri: 'https://picsum.photos/536/354'}
                    // require('../../../assets/icon.png')
                }
                style={styles.productImage}
                />

    <Button title='Quản Lý'
    onPress={()=> nav.navigate('QuanLy',{data:list})}
    />
    <Button title='About'
     onPress={()=> nav.navigate('About',{name:'Đỗ Trường Sinh',msv:'PH27866'})}
    />
    {/* <ProductList    data={list}/> */}
  </View>)
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='QuanLy' component={QuanLi} />
        <Stack.Screen
          name='Home' component={Home} />
        <Stack.Screen
          name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
     width: 50, height: 50 ,
     justifyContent:'center',
     marginHorizontal:160,
     marginVertical:20
     
    },
  b: {
    flexDirection:'column' 
  }
});

export default App;
