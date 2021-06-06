import React from 'react'
import {TouchableOpacity} from 'react-native'
import {View} from 'react-native'
import {Text, StyleSheet} from 'react-native'

export const Task = (props) => {
    const completeTask = (index) => {
        console.log(index);
    }
    return (
        <View style={styles.taskContainer} onPress={completeTask}>
            <View style={styles.taskLeftWrapper}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.titleTask}>{props.titleTask}</Text>
            </View>
            <View style={styles.circularTask}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: { 
        height: 50,
        backgroundColor: '#333',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    taskLeftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleTask: {
        color: '#fff'
    },
    square: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        marginRight: 20,
        borderRadius: 5
    },
    circularTask: {
        height: 15,
        width: 15,
        borderRadius: 15,
        backgroundColor: '#fff'
    }
})