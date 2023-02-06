import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
// import App from '../App';
import ProductList from '../index';
const QuanLi = (props) => {
    const route = props.route;
    const listTuHome = route.params.data;

    // const list=[
    //     {id:1,name :'Bún bò Huế',price : 50000},
    //     {id:2,name :'Bánh cuốn',price : 30000},
    //     {id:3,name :'Phở boà',price : 60000},
    // ];
    console.log(listTuHome);
    return (

        <FlatList
            data={listTuHome}
            renderItem={({ item }) => <View>
                <View >
                    <Image style={styles.logo} source={
                        // { uri: 'https://picsum.photos/536/354' }
                        require('../assets/icon.png')
                    } />
                    <Text >{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            </View>}
            keyExtractor={(item) => item.id}
        />
    );
}
const styles = StyleSheet.create({
    logo:{
        width:60,height:60
        
    }
})
export default QuanLi;