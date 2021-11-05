import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { CATEGORY } from "../api/api";

import { COLORS, SIZES } from "../constants/theme";

interface category {
  id?: string | any;
  name: string | any;
  image: string | any;
  isSelected?: string | any;
}

const ItemCategory = ({ id, name, image, isSelected }: category) => {
  return (
    <View
      style={[
        styles.container_itemCategory,
        {
          backgroundColor:
            isSelected == id ? COLORS.primaryColor : COLORS.backgroundColor,
        },
      ]}
    >
      <View style={styles.backgroundImageItemCategory}>
        <Image source={image} style={[styles.imageItemCategory]} />
      </View>
      <Text
        style={[
          styles.nameItemCategory,
          {
            color: isSelected == id ? COLORS.backgroundColor : COLORS.grayColor,
            fontSize: isSelected == id ? SIZES.body3 : SIZES.body4,
            fontWeight: isSelected == id ? "bold" : "normal",
          },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

export default function Category() {
  const [selectedItem, setSelectedItem] = useState("1");
  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => setSelectedItem(item.id)}>
      <ItemCategory
        id={item.id}
        name={item.name}
        image={item.image}
        isSelected={selectedItem}
      />
    </TouchableOpacity>
  );
  return (
    <View>
      <Text style={styles.title}>Category</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={CATEGORY}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.h4,
    fontWeight: "bold",
    marginVertical: 10,
  },
  container_itemCategory: {
    width: 110,

    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: "center",
    borderRadius: 35,
  },
  imageItemCategory: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
  nameItemCategory: {
    margin: 5,
    color: COLORS.grayColor,
  },
  backgroundImageItemCategory: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.backgroundColor,
    borderRadius: 45,
    padding: 10,
  },
});
