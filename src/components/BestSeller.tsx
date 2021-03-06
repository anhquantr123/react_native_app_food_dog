import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import AddIcon from "../../assets/icons/add-icon";
import { PRODUCT } from "../api/api";
import { SIZES, COLORS, Money } from "../constants/theme";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addToCart, deleteProduct } from "../redux/actions/action-cart";
import SectionTitle from "./SectionTitle";

interface itemProduct {
  id: string | any;
  name: string;
  price: number;
  image: any;
  navigation?: any;
}

const ItemProduct = ({ id, name, image, price, navigation }: itemProduct) => {
  let prices = Money(price);

  const dispatch = useDispatch();
  const cartCurrent = useSelector(
    (state: RootStateOrAny) => state.productReducer.cart
  );
  const onPressAddToCart = () => {
    let totalItemCart = cartCurrent.length;
    if (totalItemCart == 0) {
      const newCart = {
        id: id,
        image: image,
        price: price,
        name: name,
        quantity: 1,
      };
      dispatch(addToCart(newCart));
    } else {
      let productCurrent = cartCurrent.filter((item: any) => item.id == id);
      if (productCurrent.length > 0) {
        let quantity = productCurrent[0].quantity;
        const deleteItem = {
          id: id,
        };
        dispatch(deleteProduct(deleteItem));
        const updateProduct = {
          id: id,
          image: image,
          price: price,
          name: name,
          quantity: quantity + 1,
        };
        dispatch(addToCart(updateProduct));
      } else {
        const newCart = {
          id: id,
          image: image,
          price: price,
          name: name,
          quantity: 1,
        };
        dispatch(addToCart(newCart));
      }
    }
  };

  return (
    <View style={styles.containerItemProduct}>
      <View style={styles.backgroundItemProduct}></View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetailProduct", { id, image, name, price });
        }}
      >
        <Image style={styles.imageItemProduct} source={image} />
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ width: 100, paddingStart: 10 }}
          onPress={() => {
            navigation.navigate("DetailProduct", { id, image, name, price });
          }}
        >
          <Text style={{ fontSize: SIZES.body3, fontWeight: "bold" }}>
            {name}
          </Text>
          <Text
            style={{
              color: COLORS.primaryColor,
              paddingVertical: 5,
              textAlign: "left",
            }}
          >
            {prices} ??
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 50, padding: 10 }}
          onPress={onPressAddToCart}
        >
          <AddIcon size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function BestSeller({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <ItemProduct
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <SectionTitle title={"Best Seller"} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={PRODUCT}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  flatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  containerItemProduct: {
    backgroundColor: COLORS.backgroundColor,
    height: 200,
    width: 150,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 15,
  },
  backgroundItemProduct: {
    backgroundColor: COLORS.secondColor,
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "absolute",
    marginStart: 40,
    top: 25,
  },
  imageItemProduct: {
    height: "75%",
    width: "70%",
    marginLeft: 25,
    top: 20,
  },
});
