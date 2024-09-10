import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const ListCountriesScreen = () => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createCountry = () => {
    console.log(name, population, region);
    setLoading(true);
    fetch(
      "https://crudcrud.com/api/726b4e8544b94b61a6235891cfb91fe3/countries",
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
    ).then(() => {
      setLoading(false);
      router.back();
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={80}
    >
      <ScrollView>
        <TextInput
          style={{ height: 40, borderColor: "red", borderWidth: 1 }}
          onChangeText={setName}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={{ height: 40, borderColor: "red", borderWidth: 1 }}
          onChangeText={setPopulation}
          value={population}
          placeholder="Population"
        />
        <TextInput
          style={{ height: 40, borderColor: "red", borderWidth: 1 }}
          onChangeText={setRegion}
          value={region}
          placeholder="Region"
        />
        <Button onPress={createCountry} title="Create" disabled={loading} />
      </ScrollView>
    </KeyboardAvoidingView>
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
