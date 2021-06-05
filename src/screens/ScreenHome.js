import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StyleSheet} from 'react-native';

import {NavbarTop} from '../components/home/NavbarTop'
import {GenreTop} from '../components/home/GenreTop'


export const ScreenHome = () => {
    return (
       <SafeAreaView style={styles.container}>
           <NavbarTop />
           <GenreTop />
       </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    container: {
    }
})
