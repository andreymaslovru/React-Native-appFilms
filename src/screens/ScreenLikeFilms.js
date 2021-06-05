import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ScreenLikeFilms = () => {
    const navigation = useNavigation();
    return (
       <SafeAreaView>
           <Text>like ____ FILMS!</Text>
       </SafeAreaView>     
    )
}