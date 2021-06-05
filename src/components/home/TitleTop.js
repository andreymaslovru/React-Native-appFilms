import React from 'react'   
import {Text, SafeAreaView, StyleSheet} from 'react-native'

export const TitleTop = () => {
    return (
        <SafeAreaView>
            <Text style={styles.titleApp}>Today's tasks</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleApp: {
        color: '#333',
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 20
    },
})

        
    
