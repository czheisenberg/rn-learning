import React, { Component } from 'react';
// 触摸事件
import {
    View,
    Text,
    Button,
    StyleSheet,
    Alert,
    Platform,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2196F3',
        width: 260,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        padding: 20,
        textAlign: 'center'
    }
})
const Demo7Touch = () => {
    return(
        <View style={styles.container}>
            <Button 
                title="点我"
                onPress={()=>{
                    Alert.alert("你点击了按钮!");
                }}
            />
            {/* 一般来说，你可以使用TouchableHighlight来制作按钮或者链接。注意此组件的背景会在用户手指按下时变暗。 */}
            <TouchableHighlight
                onPress={()=>{
                    Alert.alert("You tapped the button!");
                }}
                underlayColor={'white'}
                // 溢出背景颜色
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            
            {/* TouchableOpacity会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。 */}
            <TouchableOpacity
                onPress={()=>{
                    Alert.alert("You tapped the button!");
                }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>

            {/* 在 Android 上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似墨水涟漪的视觉效果。 */}
            <TouchableNativeFeedback
                onPress={()=>{
                    Alert.alert("You tapped the button!");
                }}
                background={Platform.OS === 'android' ?
                    TouchableNativeFeedback.SelectableBackground(): ''
                }
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>

            {/* 如果你想在处理点击事件的同时不显示任何视觉反馈，则需要使用TouchableWithoutFeedback。 */}
            <TouchableWithoutFeedback
                onPress={()=>{
                    Alert.alert("You tapped the button!");
                }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableHighlight
                onPress={()=>{
                    Alert.alert("You long-pressed the button!");
                }}
                underlayColor={'white'}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Demo7Touch;