import React from 'react'
import {Text, ScrollView, StyleSheet} from 'react-native'

export const NavbarTop = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.navbar}>
            <Text style={styles.navbar__item}> InTheater </Text>
            <Text style={styles.navbar__item}> Box Office </Text>
            <Text style={styles.navbar__item}> Comming Soon </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    navbar: {
        paddingTop: 48,
        paddingLeft: 32
    },
    navbar__item: {
        fontSize: 32,
        lineHeight: 39,
        color: '#12153D'
    },
})

        
    
