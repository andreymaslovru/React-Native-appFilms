import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StyleSheet} from 'react-native';

import {TitleTop} from '../components/home/TitleTop'
import {Task} from '../components/home/Task'
import {InputTask} from '../components/home/InputTask'


export const ScreenHome = () => {
    const [task, setTask] = useState([])

    return (
       <SafeAreaView style={styles.container}>
           <TitleTop />
           <Task item={task} setItem={setTask} titleTask={'Task1'} countTask={'1'}/>
           <Task item={task} setItem={setTask} titleTask={'Task2'} countTask={'2'}/>
           <Task item={task} setItem={setTask} titleTask={'Task3'} countTask={'3'}/>
           <Task item={task} setItem={setTask} titleTask={'Task4'} countTask={'4'}/>
           <InputTask item={task} setItem={setTask}/>
       </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F0F0F0',
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 50,
    }
})
