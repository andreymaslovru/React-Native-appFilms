import React from 'react'
import { TouchableOpacity } from 'react-native'
import {Platform} from 'react-native'
import {View, StyleSheet, KeyboardAvoidingView, TextInput, Text} from 'react-native'

export const InputTask = (task, setTask) => {
        const handleAddTask = () => {
            console.log('task added');
            console.log('task', task);
        }
        return (
            <View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "weight"}
                    style={styles.keyboardTask}>
                        <TextInput style={styles.inputTask} placeholder={'Type a task'} onChangeText={value => setTask(value)}/>
                        <TouchableOpacity>
                            <View style={styles.addWrapper}>
                                <Text style={styles.addText} onPress={handleAddTask}>+</Text>
                            </View>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
}

const styles = StyleSheet.create({
    keyboardTask: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputTask: {
        width: 100,
        height: 20,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#333',
        width: 220,
        height: 40,
        paddingRight: 20,
        paddingLeft: 20
    },
    addWrapper: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        color: '#fff',
        fontSize: 30
    }
})
