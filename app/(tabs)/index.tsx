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
  next: string | null;
  previous: string | null;
  results: Planet[];
};

const HomeScreen = () => {
  const [planetsResponse, setPlanetsResponse] = useState<PlanetResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const getPlanets = (url: string) => {
    fetch(url).then((response) => {
      response.json().then((data: PlanetResponse) => {
        console.log("render");
        setPlanetsResponse(data);
      });
    });
  };

  useEffect(() => {
    getPlanets("https://swapi.dev/api/planets");
  }, []);

  return (
    <View style={styles.mainContainer}>
      {planetsResponse.results.map((planet) => (
        <Text
          key={planet.url}
          style={{
            fontSize: 40,
          }}
        >
          {planet.name}
        </Text>
      ))}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          title="Previous"
          disabled={!planetsResponse.previous}
          onPress={() =>
            planetsResponse.previous && getPlanets(planetsResponse.previous)
          }
        />
        <Button
          title="Next"
          disabled={!planetsResponse.next}
          onPress={() =>
            planetsResponse.next && getPlanets(planetsResponse.next)
          }
        />
      </View>
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
