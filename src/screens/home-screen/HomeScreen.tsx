import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import BestSeller from '../../components/BestSeller'
import Category from '../../components/Category'
import HeaderAppBar from '../../components/HeaderAppBar'
import { COLORS } from '../../constants/theme'

export default function HomeScreen({navigation}: any) {
    return (
        <ScrollView  style={styles.container} scrollEnabled >
            <HeaderAppBar showBackIcon={false} navigation={navigation}/>
            <Category/>
            <BestSeller />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: COLORS.backgroundColor,
        paddingHorizontal: 10,
        paddingTop: 10

    }
})
