import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StyleSheet} from 'react-native';

import {TitleTop} from '../components/home/TitleTop'
import {Task} from '../components/home/Task'
import {InputTask} from '../components/home/InputTask'


export const ScreenHome = () => {
    const [task, setTask] = useState()

    const handleAddTask = () => {
        
    }
    return (
       <SafeAreaView style={styles.container}>
           <TitleTop />
           <Task titleTask={'Task1'} countTask={'1'}/>
           <Task titleTask={'Task2'} countTask={'2'}/>
           <Task titleTask={'Task3'} countTask={'3'}/>
           <Task titleTask={'Task4'} countTask={'4'}/>
           <InputTask />
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
