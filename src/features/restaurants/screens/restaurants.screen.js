import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-cardComponent";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: white;
`;

const Title = styled(Text)`
  color: red;
`;

const Search = styled(View)``;

const CardList = styled(View)`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

export const RestaurantScreen = () => (
  <SafeArea style={styles.container}>
    <Search style={styles.search}>
      <Searchbar placeholder="Search" />
    </Search>
    <CardList style={styles.list}>
      <RestaurantInfoCard />
    </CardList>
  </SafeArea>
);

const styles = StyleSheet.create({});
