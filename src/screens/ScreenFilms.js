import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text, FlatList, View, Image} from 'react-native';

export const ScreenFilms = () => {
    // getData = async () => {
    //     const apiURL = 'https://jsonplaceholder.typicode.com/photos?_limit=30'
    //     fetch(apiURL).then((res) => res.json()).then((resJSON) => setData(resJSON))
    // }
    const renderRow = ({item}) => {
        return (
            <View>
                {/* <Image source={{uri: item.url}}/>
                <Text>{item.title}</Text>
                <Text>{item.id}</Text> */}
            </View>
        )
    }
    return (
        <SafeAreaView>
            {/* <Text>FILMSSSS</Text>
            <FlatList 
            data={data}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}/>   */}
        </SafeAreaView>
    )
}