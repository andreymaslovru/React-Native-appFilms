import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ScreenLikeFilms = () => {
    const navigation = useNavigation();
    const handleNavScreen = () => {
        navigation.navigate('Home');
    }
    return (
       <SafeAreaView>
           <Text>like ____ FILMS!</Text>
           <Button title='Go home' onPress={() => handleNavScreen()}/>
       </SafeAreaView>     
    )
}