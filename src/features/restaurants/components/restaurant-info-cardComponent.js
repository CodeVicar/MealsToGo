import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.error};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <RestaurantCard
      style={styles.card}
      elevation={5}
      onPress={() => alert("Pressed")}
    >
      <Card.Cover source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({});
