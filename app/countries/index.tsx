import useFetch from "@/hooks/useFetch";
import { Link, useNavigation } from "expo-router";
import { Fragment, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type Country = {
  name: string;
  population: string;
  region: string;
  _id: string;
};

const ListCountriesScreen = () => {
  const { data, loading, error, refetch } = useFetch<Country[]>(
    "https://crudcrud.com/api/726b4e8544b94b61a6235891cfb91fe3/countries"
  );

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", refetch);

    return () => {
      navigation.removeListener("focus", refetch);
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text>Mes pays</Text>
      <Link href="/countries/create">Go to Home</Link>
      {loading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        data?.map((country) => (
          <Fragment key={country._id}>
            <Text
              style={{
                fontSize: 40,
              }}
            >
              {country.name}
            </Text>
            <Text>{country.population}</Text>
          </Fragment>
        ))
      )}
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
