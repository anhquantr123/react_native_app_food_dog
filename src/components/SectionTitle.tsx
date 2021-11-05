import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

type sectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: sectionTitleProps) => {
  return (
    <View style={styles.flatRow}>
      <Text style={{ fontSize: SIZES.h4, fontWeight: "bold" }}>{title}</Text>
      <TouchableOpacity>
        <Text style={{ color: COLORS.primaryColor }}>See all </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  flatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
