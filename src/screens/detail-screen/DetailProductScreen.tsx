import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HeaderAppBar from '../../components/HeaderAppBar'
import { COLORS } from '../../constants/theme'



export default function DetailProductScreen({navigation, route}: any ) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderAppBar showBackIcon={true} showInput={false} title={route.params.name} navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingHorizontal: 10,
        paddingTop: 10,
      },
})
