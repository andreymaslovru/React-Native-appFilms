import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {Platform} from 'react-native'
import {View, StyleSheet, KeyboardAvoidingView, TextInput, Text} from 'react-native'
import {Task} from './Task'

export const InputTask = (props) => {
    const [task, setTask] = useState()
    const [itemsTask, setItemsTask] = useState([])
    const click = () => {
        console.log(task);
        setItemsTask([...itemsTask, task]);
        console.log(itemsTask);
    }
    const completeTask = (index) => {
        console.log('ggg');
        console.log(index);
    }
        return (
            <View>
                <View>
                    {
                        itemsTask.map((item, index) => {
                            return <Task key={index} index={index} completeTask={completeTask} titleTask={item}/>
                        })
                    }
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "weight"}
                    style={styles.keyboardTask}>
                        <TextInput style={styles.inputTask} placeholder={'Type a task'} onChangeText={(value) => setTask(value)}/>
                        <TouchableOpacity>
                            <View style={styles.addWrapper}>
                                <Text style={styles.addText} onPress={click}>+</Text>
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
        justifyContent: 'space-between',
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
