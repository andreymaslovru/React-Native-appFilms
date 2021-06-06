import React from 'react'
import {TouchableOpacity} from 'react-native'
import {View} from 'react-native'
import {Text, StyleSheet} from 'react-native'

export const Task = (props) => {
    //const date = moment().utcOffset('+03:00').format('YYYY-MM-DD');
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskLeftWrapper}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.titleTask}>{props.titleTask}</Text>
                <Text style={styles.titleTask}>{props.data}</Text>
            </View>
            <View style={styles.circularTask}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: { 
        minHeight: 50,
        backgroundColor: '#333',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    taskLeftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 200
    },
    titleTask: {
        color: '#fff'
    },
    square: {
        width: 20,
        height: 20,
        backgroundColor: '#54b2cd',
        marginRight: 20,
        borderRadius: 5
    },
    circularTask: {
        height: 15,
        width: 15,
        borderRadius: 15,
        backgroundColor: '#54b2cd'
    }
})