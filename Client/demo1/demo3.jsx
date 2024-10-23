import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';


const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

const Demo3 = () => {

    return(
        <ScrollView
            horizontal={false}
        >
            {/* horizontal 水平滚动 */}
            {/* pagingEnabled 分页 */}
            <Text 
                style={{ fontSize: 96 }}
            >
                Scorll me plz.
            </Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text 
                style={{ fontSize: 96 }}
            >
                If you like
            </Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>What's the best</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>Framework around?</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 80 }}>React Native</Text>
        </ScrollView>
    )
}

export default Demo3;