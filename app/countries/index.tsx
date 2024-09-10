import useFetch from "@/hooks/useFetch";
import { getCountries } from "@/services/countries";
import { setAll } from "@/store/slices/countries.slice";
import { RootState, useCustomDispatch } from "@/store/store";
import { getCountriesAction } from "@/store/thunkActions/countries.actions";
import { Link, useNavigation } from "expo-router";
import { Fragment, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type Country = {
  name: string;
  population: string;
  region: string;
  _id: string;
};

const ListCountriesScreen = () => {
  const dispatch = useCustomDispatch();
  const { countries, loading } = useSelector(
    (state: RootState) => state.countries
  );

  useEffect(() => {
    console.log("test");
    dispatch(getCountriesAction());
  }, []);

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
