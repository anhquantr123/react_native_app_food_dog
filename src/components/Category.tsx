import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../constants/theme'

export default function Category() {
    return (
        <View>
            <Text style={styles.title}>Category</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: SIZES.h1,
        fontWeight:'bold'
    }

})
