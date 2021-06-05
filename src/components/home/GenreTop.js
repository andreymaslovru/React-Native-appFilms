import React from 'react'
import {Text, ScrollView, StyleSheet} from 'react-native'

export const GenreTop = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.genreContainer}>
            <Text style={styles.genreContainer__item}> Action </Text>
            <Text style={styles.genreContainer__item}> Crime </Text>
            <Text style={styles.genreContainer__item}> Comedy </Text>
            <Text style={styles.genreContainer__item}> Drama </Text>
            <Text style={styles.genreContainer__item}> Melodrama </Text>
            <Text style={styles.genreContainer__item}> Fantasy </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    genreContainer: { 
        paddingTop: 50
    },
    genreContainer__item: {
        marginRight: 20, 
        borderWidth: 1.5,
        borderColor: '#12153D',
        borderRadius: 22,
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 24,
        color: '#434670',
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 24,
        paddingLeft: 24,
    }

})