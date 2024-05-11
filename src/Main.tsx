import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
//
import Constansts from "expo-constants";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconOctions from "react-native-vector-icons/Octicons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconMI from "react-native-vector-icons/MaterialIcons";
//
import { Product } from "./components/Product";

const Main = () => {
  const categories: Array<string> = ["Promos", "Combos", "Pierna"];
  const products: Array<object> = [
    {
      image: (
        <Image
          style={styles.productImage}
          source={require("../assets/sandwich.jpg")}
        />
      ),
      name: "sandwich de salami y huevo",
      price: 175,
    },
    {
      image: (
        <Image
          style={styles.productImage}
          source={require("../assets/salamiQueso.jpeg")}
        />
      ),
      name: "salami y queso",
      price: 440,
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/hamburguesa.jpg")}
          ></Image>
          {/* Button Slider */}
          <TouchableOpacity>
            <View style={styles.btnSlider}>
              <IconOctions name="chevron-left" size={20} />
            </View>
          </TouchableOpacity>
          {/* Button Reservar */}
          <TouchableOpacity>
            <Text style={styles.btnReserva}>Reservar Mesa</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Logo */}
          <View style={[styles.logoContainer, styles.shadow]}>
            <Image
              style={styles.logo}
              source={require("../assets/payanLogo.jpg")}
            />
          </View>

          {/* Details */}
          <View style={styles.details}>
            {/* Follow */}
            <View style={styles.follow}>
              <Text style={styles.text}>
                Barra Junio Payan - Rómulo Betancourt
              </Text>

              <TouchableOpacity>
                <Text style={styles.btnSeguir}>
                  <IconFontAwesome name="heart-o" /> Seguir
                </Text>
              </TouchableOpacity>
            </View>
            {/* Info */}
            <View style={styles.info}>
              {/* Rate */}
              <Text style={styles.infoText}>
                <IconFontAwesome name="star-o" />
                4.3
              </Text>
              {/* Time */}
              <Text>
                <IconFontAwesome name="circle" size={5} color="#c3c3c3" />
              </Text>
              <Text style={styles.infoText}>Abierto hasta las 8:30PM</Text>
              {/* Followers */}
              <Text>
                <IconFontAwesome name="circle" size={5} color="#c3c3c3" />
              </Text>
              <Text style={styles.infoText}>
                <IconFontisto name="slightly-smile" /> Seguidores 450
              </Text>
            </View>
            <View style={styles.delivery}>
              <View style={styles.deliveryText}>
                <IconFontisto name="shopping-bag" size={20} />
              </View>
              <View style={[styles.deliveryText, styles.deliveryOption]}>
                <IconMI name="delivery-dining" color="#fff" size={30} />
                <Text style={{ color: "#fff" }}>Delivery</Text>
              </View>
              <View style={styles.deliveryText}>
                <IconMCI name="silverware-fork-knife" size={25} />
              </View>
            </View>
          </View>
          {/* Time and Cost */}
          <View style={styles.timeCost}>
            <View>
              <Text style={styles.boldText}>
                <IconMCI name="clock" />
                10-25 min
              </Text>
              <Text style={styles.thinText}> Tiempo de envío</Text>
            </View>
            <View style={styles.line}></View>
            <View>
              <Text style={styles.boldText}>
                <IconMCI name="clock" />
                DOP $60.00
              </Text>
              <Text style={styles.thinText}>Costo de entrega</Text>
            </View>
          </View>
          {/* Search */}
          <View style={styles.search}>
            <IconFeather name="search" style={styles.iconSearch} size={20} />
            <TextInput style={styles.input} placeholder="Buscar por producto" />
          </View>
          {/* Categories */}
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.categories}>
              {categories.map((category, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.category,
                      index === 0 && styles.firstCategory,
                    ]}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        index === 0 && styles.categoryTextWhite,
                      ]}
                    >
                      {category}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          {/* Products */}
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.products}>
              {products.map((product, index) => {
                return (
                  <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                  >
                    {product.image}
                  </Product>
                );
              })}
            </View>
          </ScrollView>
          {/* Entradas */}
          <View style={styles.appetizerHead}>
            <Text style={styles.appetizerText}>Entradas</Text>
          </View>
          <View style={styles.appetizers}>
            <View style={styles.appetizerList}></View>
            <View style={styles.appetizerInfoContainer}>
              <View style={styles.appetizerInfo}>
                <Text style={styles.appetizerInfoText}>
                  (3) Articulos | DOP$560
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginTop: Constansts.statusBarHeight,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 250,
  },
  btnSlider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#000",
    position: "absolute",
    bottom: 140,
    width: 40,
    height: 40,
    borderRadius: 50,
    left: 15,
  },

  btnReserva: {
    backgroundColor: "#232323",
    color: "#fff",
    padding: 15,
    position: "absolute",
    bottom: 45,
    fontSize: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    fontWeight: "600",
    right: 15,
  },

  content: {
    borderTopEndRadius: 25,
    position: "relative",
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
    bottom: 25,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: "absolute",
    top: -50,
    left: 20,
  },
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },

  details: {
    paddingHorizontal: 25,
    paddingTop: 45,
  },
  btnSeguir: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    width: "70%",
  },
  follow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginTop: 15,
  },
  infoText: {
    display: "flex",
    gap: 5,
    alignItems: "center",
  },
  delivery: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    marginTop: 15,
    borderRadius: 50,
  },
  deliveryText: {
    padding: 15,
    paddingVertical: 12,
    borderRadius: 50,
  },

  deliveryOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232323",
    gap: 10,
    paddingHorizontal: 30,
  },

  timeCost: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },

  line: {
    width: 2,
    backgroundColor: "#e2e2e2",
    height: "100%",
  },

  boldText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  thinText: {
    color: "#828282",
    fontWeight: "bold",
  },

  search: {
    marginTop: 10,
    paddingHorizontal: 25,
    position: "relative",
  },
  iconSearch: {
    position: "absolute",
    top: 18,
    left: 40,
    zIndex: 5,
  },
  input: {
    padding: 15,
    paddingLeft: 40,
    borderRadius: 50,
    backgroundColor: "#f8f8f8",
  },
  categories: {
    flex: 1,
    flexDirection: "row",
    marginTop: 25,
    paddingLeft: 15,
    gap: 15,
  },
  category: {
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
    padding: 20,
    width: 150,
  },
  firstCategory: {
    backgroundColor: "#232323",
  },
  categoryText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  categoryTextWhite: {
    color: "#fff",
  },

  products: {
    flex: 1,
    flexDirection: "row",
    marginTop: 25,
    paddingLeft: 15,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  appetizerHead: {
    marginTop: 20,
  },
  appetizerText: {
    paddingLeft: 15,
    padding: 10,
    backgroundColor: "#f8f8f8",
    fontSize: 18,
  },
  appetizers: {
    paddingHorizontal: 20,
  },

  appetizerList: {
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 1,
    height: 500,
    width: "100%",
  },
  appetizerInfoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  appetizerInfo: {
    width: "60%",
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 6,
    shadowColor: "#232323",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: "center",
    paddingVertical: 12,
    alignItems: "center",
  },
  appetizerInfoText: {
    width: "100%",
    textAlign: "center",
    height: "100%",
  },
});

export default Main;
