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
        marginRight: 10, 
        borderWidth: 1.5,
        borderColor: '#12153D',
        borderRadius: 15,
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 12,
        color: '#434670',
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})