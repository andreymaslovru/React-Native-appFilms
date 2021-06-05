import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text, StyleSheet, View, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


export const ScreenHome = () => {
    //const [count, setCount] = useState()
    // const handleClickMinus = () => {
    //     const res = count - 1
    //     setCount(res)
    // }
    // const handleClickPlus = () => {
    //     const res = count + 1
    //     setCount(res)
    // }
    const dispatch = useDispatch()
    const handleClickPl = () => {
        dispatch({type: 'INCREMENT_COUNTER'})
    }
    const handleClickMin = () => {
        dispatch({type: 'DECREMENT_COUNTER'})
    }

    const count = useSelector(state => state.counter)

    return (
       <SafeAreaView style={styles.container}>
           <Text>HOME</Text> 
           <View style={styles.countWrapper}>
            <Button style={styles.countButton} title="Minus" onPress={handleClickMin}/>
            <Text style={styles.countButton}>{count}</Text>
            <Button style={styles.countButton} title="Plus" onPress={handleClickPl}/>
           </View>
       </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    },
    countWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        fontSize: 30
    },
    countButton: {
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 5,
        marginRight: 20,
        marginLeft: 20,
        width: 80,
        textAlign: 'center'
    }
})
