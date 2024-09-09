import CardView from "@/components/CardView";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type Planet = {
  name: string;
  url: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
};

type PlanetResponse = {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
};

const HomeScreen = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/").then((response) => {
      response.json().then((data: PlanetResponse) => {
        console.log("render");
        setPlanets(data.results);
      });
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      {planets.map((planet) => (
        <Text
          key={planet.url}
          style={{
            fontSize: 40,
          }}
        >
          {planet.name}
        </Text>
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

export default HomeScreen;
