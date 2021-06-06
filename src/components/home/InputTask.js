import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {Platform} from 'react-native'
import {View, StyleSheet, KeyboardAvoidingView, TextInput, Text, ScrollView} from 'react-native'
import {Task} from './Task'

export const InputTask = (props) => {
    const [task, setTask] = useState()
    const [itemsTask, setItemsTask] = useState([])
    const click = () => {
        setItemsTask([...itemsTask, task]);
    }
    const completeTask = (index) => {
        const itemsTaskNew = [...itemsTask];
        itemsTaskNew.splice(index, 1);
        setItemsTask(itemsTaskNew);
    }
        return (
            <View style={styles.innerTask}>
                <ScrollView style={styles.scrollTasks}>
                    {
                        itemsTask.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task index={index} titleTask={item}/>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
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
    innerTask: {
        flexDirection: 'column',
        alignContent: 'flex-end',
    },
    scrollTasks: {
        maxHeight: '90%'
    },
    keyboardTask: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    inputTask: {
        minWidth: 100,
        height: 25,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#54b2cd',
        color: '#fff',
        width: 220,
        height: 40,
        paddingRight: 20,
        paddingLeft: 20
    },
    addWrapper: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#54b2cd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        color: '#fff',
        fontSize: 30
    }
})
