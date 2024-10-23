import React, { useState } from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native'

const Demo1 = (props) =>{
    const [isHungry, setIsHungry ] = useState(true);
    return(
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? "hungry": "full" }!
            </Text>
            <Button
                onPress = {() =>{
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
                
            
        </View>
    )
}

export default Demo1;
