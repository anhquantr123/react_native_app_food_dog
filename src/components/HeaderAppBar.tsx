import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DrawerLayoutAndroidBase,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import BackIcon from "../../assets/icons/back-icon";
import CartIcon from "../../assets/icons/cart-icon";
import SearchIcon from "../../assets/icons/search-icon";
import { COLORS, SIZES } from "../constants/theme";
import { RootStateOrAny, useSelector } from "react-redux";

interface headerAppBar {
  navigation?:any ,
  showBackIcon?: boolean;
  placeholder?: string | any;
  showInput?: boolean,
  showCart?: boolean,
  title?: string | any ,
}

export default function HeaderAppBar({
  navigation,
  showBackIcon = false,
  placeholder = "Tìm kiếm...",
  showInput = true,
  showCart = true,
  title,
}: headerAppBar) {
  const [widthContainerSearch, setWidthContainerSearch] = useState("87%");
  const cart = useSelector(
    (state: RootStateOrAny) => state.productReducer.cart
  );
  let product = cart.length;
  var  totalItemCart = 0 ;
  for(let i = 0 ; i<= product - 1; i++){
    totalItemCart += cart[i].quantity;
  }
  


  return (
    <View style={styles.container}>
      {showBackIcon == false? null : (
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
          } }
        >
          <BackIcon size={26} />
        </TouchableOpacity>
      )}

      {showInput  == true ? <View
        style={[
          styles.inputSearchContainer,
          {
            width: showBackIcon  == false ? widthContainerSearch : "75%",
          },
        ]}
      >
        <SearchIcon size={24} />
        <TextInput style={styles.inputSearch} placeholder={placeholder} />
      </View>:  <View>
        <Text style={{fontWeight:'bold', fontSize:SIZES.body2}}>{title}</Text>
        </View> }

     {showCart == true ?  <TouchableOpacity style={styles.cart}
        onPress={()=>{
          navigation.navigate("Cart")
        }}
      >
        <CartIcon size={26} />
        <View style={styles.itemCart}></View>
        <Text style={[styles.textItemCard , {left: (totalItemCart < 10 )? 17.5: 13.5 }]}>{totalItemCart}</Text>
      </TouchableOpacity>: null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSearchContainer: {
    flexDirection: "row",

    backgroundColor: "#F6F6F6",
    padding: 8,
    borderRadius: 25,
  },
  inputSearch: {
    fontSize: SIZES.body3,
    paddingStart: 10,
  },
  cart: {
    paddingRight: 5,
  },
  itemCart: {
    height: 18,
    width: 18,
    backgroundColor: "red",
    position: "absolute",
    borderRadius: 15,
    left: 12,
    bottom: 15,
  },
  textItemCard: {
    color: "white",
    bottom: 17,
    fontSize: 12,
    fontWeight: "bold",
    position: "absolute",
  },
});
