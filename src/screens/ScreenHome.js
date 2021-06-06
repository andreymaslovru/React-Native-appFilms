import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StyleSheet, ScrollView} from 'react-native';

import {TitleTop} from '../components/home/TitleTop'
import {InputTask} from '../components/home/InputTask'


export const ScreenHome = () => {
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
