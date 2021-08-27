import React , {useState} from 'react'
import { StyleSheet, Text, View  , TouchableOpacity, DrawerLayoutAndroidBase} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import BackIcon from '../../assets/icons/back-icon'
import CartIcon from '../../assets/icons/cart-icon'
import SearchIcon from '../../assets/icons/search-icon'
import { SIZES } from '../constants/theme'

interface headerAppBar{
    showBackIcon? : boolean , 
    placeholder?:string| any ,
}

export default function HeaderAppBar({showBackIcon=true, placeholder="Tìm kiếm..."}: headerAppBar) {

const [widthContainerSearch, setWidthContainerSearch] = useState("87%")
    return (
        <View style={styles.container}>
        {showBackIcon? null :  <TouchableOpacity>
         <BackIcon size={26}/>
         </TouchableOpacity> }
        
        <View style={[styles.inputSearchContainer,{
            width: showBackIcon ? widthContainerSearch : "75%"
        }]}>
            <SearchIcon size={24}/>
            <TextInput style={styles.inputSearch}
            placeholder={placeholder}/>
        </View>

        <TouchableOpacity style={styles.cart}>
            <CartIcon size={26}/>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    inputSearchContainer:{
       flexDirection:'row',
       
        backgroundColor:'#F6F6F6',
        padding: 8,
        borderRadius: 25
    },
    inputSearch:{
        fontSize: SIZES.body3,
        paddingStart: 10
    },
    cart:{
        marginRight: 5
    }

})
