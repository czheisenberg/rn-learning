import React from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        marginLeft: 10,
    },
    sectionHeader: {
        backgroundColor: 'rgba(247,247,247,1.0)',
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
    },
    item: {
        height: 44,
        padding: 10,
        fontSize: 18,
    }
})

const Demo5_SectionList = () =>{
    return(
        <View style={styles.container}>
            <SectionList 
                sections={[
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],}
                ]}
                renderItem={
                    ({item}) => (
                        <Text style={styles.item}>{item}</Text>
                    )
                }
                renderSectionHeader={
                    ({section}) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )
                }
                keyExtracotr={
                    (item, index) => index
                }
            />
        </View>
    )
}


export default Demo5_SectionList;