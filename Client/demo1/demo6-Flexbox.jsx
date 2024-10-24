import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Demo6Flexbox = () => {

    return (
        <View style={[
            styles.container,{
                flexDirection: "column"
                // 沿竖轴排列
            }
        ]}>
            <View
                style={{ flex: 1, backgroundColor: "red"}}
            />
            <View
                style={{ flex: 2, backgroundColor: "darkorange"}}
            />
            <View
                style={{ flex: 3, backgroundColor: "green"}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})

export default Demo6Flexbox;