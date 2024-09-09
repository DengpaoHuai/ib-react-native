import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const ListCountriesScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Bienvenue</Text>
      <Link href="/countries/create">Go to Home</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListCountriesScreen;
