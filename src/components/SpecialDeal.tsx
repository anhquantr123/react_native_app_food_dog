import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import SectionTitle from "./SectionTitle";

const SpecialDeal = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title={"Special deal"} />
      <View>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          source={require("../../assets/images/special_deal.png")}
          style={styles.imageBackground}
        >
          <Image
            source={require("../../assets/images/image1.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Sale 20%</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SpecialDeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    width: "100%",
    marginVertical: 10,
    marginBottom: 20,
  },
  image: {
    marginTop: 50,
    height: "50%",
    marginLeft: 10,
    width: "30%",
    resizeMode: "cover",
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    color: "#8D3A17",
    fontSize: 20,
    fontWeight: "bold",
  },
});
