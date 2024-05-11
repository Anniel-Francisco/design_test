import { StyleSheet, Text, View, Image } from "react-native";
//
import PropTypes from "prop-types";
//
import { ReactNode } from "react";
//
interface ProductI {
  name: string;
  price: number;
}

interface Props {
  children: ReactNode;
}

export function Product({ children, name, price }: Props & ProductI) {
  return (
    <View>
      {children}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>DOP ${price}</Text>
    </View>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  name: {
    color: "#000",
    fontSize: 18,
    width: "80%",

    marginTop: 10,
  },
  price: {
    marginTop: 5,
    color: "#5c6560",
  },
});
