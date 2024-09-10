import { RootState, useCustomDispatch } from "@/store/store";
import {
  deleteCountryAction,
  getCountriesAction,
} from "@/store/thunkActions/countries.actions";
import { Link } from "expo-router";
import { Fragment, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

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
          <Button
            onPress={() => dispatch(deleteCountryAction(country._id))}
            title="Delete"
          ></Button>
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
