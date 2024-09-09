import { getPlanets } from "@/services/planets";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useFetch from "@/hooks/useFetch";

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
  const { data, loading, error, refetch } = useFetch<PlanetResponse>(
    "https://swapi.dev/api/planets"
  );

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        data?.results.map((planet) => (
          <Text
            key={planet.url}
            style={{
              fontSize: 40,
            }}
          >
            {planet.name}
          </Text>
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

export default HomeScreen;
