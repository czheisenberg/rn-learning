import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const Demo4_FlatList = () => {
    
    return(
        <View style={style.container}>
            <FlatList 
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
            />
        </View>
    )
}

export default Demo4_FlatList;