import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../../../assets/icons/delete-icon";
import MinusIcon from "../../../assets/icons/minus-icon";
import PlusIcon from "../../../assets/icons/plus-icon";
import HeaderAppBar from "../../components/HeaderAppBar";
import { COLORS, Money, SIZES } from "../../constants/theme";
import { addToCart, deleteProduct } from "../../redux/actions/action-cart";

interface cartScreen {
  id?: string | any;
  image?: string | any;
  price?: string | any;
  name?: string | any;
  quantity?: string | any;
}

const ProductItem = (props: cartScreen) => {
  let prices = Money(props.price);
  const dispatch = useDispatch();
 
  return (
    <View style={styles.product_item_container}>
      <View style={{ flexDirection: "row", justifyContent:'space-between'}}>
        <Image source={props.image} style={styles.image_product} />
        <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: SIZES.body3, fontWeight: "bold" }}>
                {props.name}{" "}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.body3,
                  fontWeight: "bold",
                  color: COLORS.primaryColor,
                  marginVertical: 5,
                }}
              >
                {prices}đ
              </Text>
              <Text
                style={{
                  fontSize: SIZES.body4,
                  color: "#000",
                }}
              >
                Số Lượng: {props.quantity}
              </Text>
            </View>

            <View style={{ margin: 5, marginLeft: 50 }}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{opacity:props.quantity == 1? 0.2 : 1}} onPress={()=>{
                  if(props.quantity> 1){
                    const deleteItem = {
                      id: props.id,
                    };
                    dispatch(deleteProduct(deleteItem));
                    const updateProduct = {
                      id: props.id,
                      image: props.image,
                      price: props.price,
                      name: props.name,
                      quantity: props.quantity - 1,
                    };
                    dispatch(addToCart(updateProduct));
                  }
                }}>
                  <MinusIcon size={26} />
                </TouchableOpacity  >
                <View style={{ width: 30, alignItems: "center" }}>
                  <Text style={{ fontSize: SIZES.body2 }}>
                    {props.quantity}
                  </Text>
                </View>

                <TouchableOpacity onPress={()=>{
                  
                    const deleteItem = {
                      id: props.id,
                    };
                    dispatch(deleteProduct(deleteItem));
                    const updateProduct = {
                      id: props.id,
                      image: props.image,
                      price: props.price,
                      name: props.name,
                      quantity: props.quantity + 1,
                    };
                    dispatch(addToCart(updateProduct));
                  
                }}>
                  <PlusIcon size={26} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center" , marginTop:15}}>
               <TouchableOpacity 
                onPress={()=>{
                    const product  = {
                      id: props.id
                    };
                    dispatch(deleteProduct(product))
                }}
               >
               <DeleteIcon size={26} />
                 </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function CartScreen({ navigation }: any) {
  
  var CART_DATA = useSelector(
    (state: RootStateOrAny) => state.productReducer.cart
  );
  var itemCart = CART_DATA.length;

  const renderItem = ({ item }: any) => (
    <ProductItem
      id={item.id}
      image={item.image}
      price={item.price}
      name={item.name}
      quantity={item.quantity}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderAppBar
        showBackIcon={true}
        showInput={false}
        navigation={navigation}
        showCart={false}
      />
      {itemCart == 0 ? (
        <View>
          <Text style={styles.text_total_product}>Chưa có sản phẩm nào</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.text_total_product}>{itemCart} items</Text>
          <View>
            <FlatList
              data={CART_DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View></View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  text_total_product: {
    fontSize: SIZES.body2,
    color: COLORS.blackColor,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  product_item_container: {
    height: 100,
    backgroundColor: COLORS.backgroundColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 15,
    margin: 10,
  },
  image_product: {
    height: 80,
    width: 80,
    margin: 5,
  },
});
