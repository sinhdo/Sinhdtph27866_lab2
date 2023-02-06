import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
 const About = (props)=>{
    const route=  props.route;
    const nameTuHome = route.params?.name||'';
    const maTuHome = route.params?.msv||'';
   return (
   <View>
     <Text>Họ tên: {nameTuHome}</Text>
    <Text>Mã sinh viên: {maTuHome}</Text>
   </View>
   );
   
    
 }
 export default About;