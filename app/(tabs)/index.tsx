import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets?page=" + page).then((response) => {
      response.json().then((data: PlanetResponse) => {
        console.log("render");
        setPlanets(data.results);
        setCount(data.count);
      });
    });
  }, [page]);

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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          title="Previous"
          disabled={page === 1}
          onPress={() => {
            setPage(page - 1);
          }}
        />
        <Button
          title="Next"
          disabled={page * 10 >= count}
          onPress={() => {
            setPage(page + 1);
          }}
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
