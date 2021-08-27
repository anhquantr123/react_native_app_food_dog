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
  showBackIcon?: boolean;
  placeholder?: string | any;
}

export default function HeaderAppBar({
  showBackIcon = true,
  placeholder = "Tìm kiếm...",
}: headerAppBar) {
  const [widthContainerSearch, setWidthContainerSearch] = useState("87%");
  const cart = useSelector(
    (state: RootStateOrAny) => state.productReducer.cart
  );
  console.log(cart);

  return (
    <View style={styles.container}>
      {showBackIcon ? null : (
        <TouchableOpacity>
          <BackIcon size={26} />
        </TouchableOpacity>
      )}

      <View
        style={[
          styles.inputSearchContainer,
          {
            width: showBackIcon ? widthContainerSearch : "75%",
          },
        ]}
      >
        <SearchIcon size={24} />
        <TextInput style={styles.inputSearch} placeholder={placeholder} />
      </View>

      <TouchableOpacity style={styles.cart}>
        <CartIcon size={26} />
        <View style={styles.itemCart}></View>
        <Text style={[styles.textItemCard , {left: (cart.length < 10 )? 17.5: 13.5 }]}>{cart.length}</Text>
      </TouchableOpacity>
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
