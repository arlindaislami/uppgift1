import { Image, StyleSheet, Platform, View, Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (

    <View style={{ backgroundColor: "lightblue", flex:1}}>


    <View style={{ backgroundColor: "white", height: 100, flexDirection: "row", margin:5}}>
        <View style={{ backgroundColor: "red", flex:1, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:25}}>RÖD</Text>
        </View>
    </View>


     <View style={{height:100, flexDirection:"row"}}>
     <View style={{ backgroundColor: "green", flex:1, margin:5, alignItems:"flex-start" }}><Text style={{fontSize:25}}>Grön</Text></View>
     <View style={{ backgroundColor: "yellow", flex:1, margin:5}}></View>
     </View>

     <View style={{height:50, flexDirection:"row"}}>
     <View style={{backgroundColor: "red", flex:3, margin:5 }}></View>
     <View style={{backgroundColor: "black", flex:1, margin:5}}></View>
     </View>

     

    <View style={{ flex:1}}></View>
    <View style={{ backgroundColor: "orange", height:50, margin:5,justifyContent:"center", alignItems:"flex-end"}}>
    <Text style={{fontSize:40}}>ORANGE</Text>
    </View>



   </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
