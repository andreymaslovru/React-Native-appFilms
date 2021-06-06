import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'

import {TitleTop} from '../components/home/TitleTop'
import {InputTask} from '../components/home/InputTask'


export const ScreenHome = () => {

    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)
    console.log('count', counter);
    return (
       <SafeAreaView style={styles.container}>
            <TitleTop />
            <InputTask />
       </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between',
        backgroundColor: '#202329',
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 50,
    }
})
