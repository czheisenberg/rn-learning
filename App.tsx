import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Demo1 from './Client/demo1/demo1';
import Demo2 from './Client/demo1/demo2';
import Demo3 from './Client/demo1/demo3';
import Demo4_FlatList from './Client/demo1/demo4-FlatList';
import Demo5_SectionList from './Client/demo1/demo5-SectionList';
import Demo6Flexbox from './Client/demo1/demo6-Flexbox';
import Demo7Touch from './Client/demo1/demo7-touch';

const HomeScreen = ({ navigation }) =>{
  return (
    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button 
        title='Go to Details'
        onPress={() =>{
          navigation.navigate('Details')
        }}
      />
    </View>
  )
}
const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text>Details Screen</Text>
      <Button 
        title='Go to back'
        onPress={() =>{
          // navigation.goBack()
          navigation.navigate('Home')
        }}
      /> 
    </View>
  )
}
const Stack = createNativeStackNavigator();
const App = () =>{
  return(
    // <ScrollView>
    //   <Text>Some text</Text>
    //   <View>
    //     <Text>Some more text</Text>
    //     <Image
    //       source={{
    //         uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    //       }}
    //       style={{ width: 200, height: 200}}
    //     />
    //   </View>
    //   {/* <TextInput 
    //     style={{
    //       height: 40,
    //       borderColor: 'gray',
    //       borderWidth: 1
    //     }}
    //     defaultValue='You can type in me'
    //   /> */}
    //   {/* <Demo1 name="xxx" />
    //   <Demo1 name="yyy" /> */}
    //   {/* <Demo2 /> */}
    //   {/* <Demo3 /> */}
    // </ScrollView>
    // <Demo4_FlatList />
    // <Demo5_SectionList />
    // <Demo6Flexbox />
   
    <NavigationContainer>
       {/* <Demo7Touch /> */}
       <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;