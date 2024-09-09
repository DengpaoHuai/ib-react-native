import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const ListCountriesScreen = () => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [region, setRegion] = useState("");

  const createCountry = () => {
    console.log(name, population, region);
    fetch(
      "https://crudcrud.com/api/7584814a2f3c4548a5b9bd816f37ed57/countries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          population,
          region,
        }),
      }
    );
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={setPopulation}
        value={population}
        placeholder="Population"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={setRegion}
        value={region}
        placeholder="Region"
      />
      <Button onPress={createCountry} title="Create" />
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
