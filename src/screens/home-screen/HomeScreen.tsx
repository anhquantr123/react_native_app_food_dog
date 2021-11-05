import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import BestSeller from "../../components/BestSeller";
import Category from "../../components/Category";
import HeaderAppBar from "../../components/HeaderAppBar";
import SpecialDeal from "../../components/SpecialDeal";
import { COLORS } from "../../constants/theme";

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} scrollEnabled>
      <HeaderAppBar showBackIcon={false} navigation={navigation} />
      <Category />
      <BestSeller navigation={navigation} />
      <SpecialDeal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
