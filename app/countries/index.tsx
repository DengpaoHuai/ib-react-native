import useCountries from "@/store/useCountriesStore";
import { Link } from "expo-router";
import { Fragment } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ListCountriesScreen = () => {
  const { countries, deleteCountryById } = useCountries();

  return (
    <View style={styles.mainContainer}>
      <Text>Mes pays</Text>
      <Link href="/countries/create">Go to Home</Link>
      {countries?.map((country) => (
        <Fragment key={country._id}>
          <Text
            style={{
              fontSize: 40,
            }}
          >
            {country.name}
          </Text>
          <Text>{country.population}</Text>
          <Button
            onPress={() => deleteCountryById(country._id)}
            title="Delete"
          ></Button>
          <Link href={`/countries/update/${country._id}`}>Update</Link>
        </Fragment>
      ))}
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
