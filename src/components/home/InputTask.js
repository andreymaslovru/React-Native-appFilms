import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {Platform} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {View, StyleSheet, KeyboardAvoidingView, TextInput, Text, ScrollView} from 'react-native'
import {Task} from './Task'
import {actionCreaterAddTask, actionCreaterRemoveTask} from '../../redux/reducer';

export const InputTask = (props) => {


    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)


    const [task, setTask] = useState()

    const click = () => {
        dispatch(actionCreaterAddTask(task))
        setTask('')
    }

    const completeTask = (index, item) => {
        dispatch(actionCreaterRemoveTask(index))
    }
        return (
            <View style={styles.innerTask}>
                <ScrollView style={styles.scrollTasks} showsVerticalScrollIndicator={false}>
                    {
                        tasks.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index, item)}>
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
                        <TouchableOpacity onPress={click}>
                            <View style={styles.addWrapper}>
                                <Text style={styles.addText}>+</Text>
                            </View>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
}

const styles = StyleSheet.create({
    innerTask: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
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
