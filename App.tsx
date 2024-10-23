import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput
} from 'react-native';

import Demo1 from './Client/demo1/demo1';
import Demo2 from './Client/demo1/demo2';
import Demo3 from './Client/demo1/demo3';
import Demo4_FlatList from './Client/demo1/demo4-FlatList';
import Demo5_SectionList from './Client/demo1/demo5-SectionList';

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
    <Demo5_SectionList />
  )
}

export default App;