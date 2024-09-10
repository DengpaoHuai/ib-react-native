import { getPlanets } from "@/services/planets";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useFetch from "@/hooks/useFetch";
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";

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

const PlanetScreen = () => {
  const { data, loading, error, refetch } =
    useFetch<PlanetResponse>(getPlanets);
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Link href="/countries">Go to Home</Link>
      <Button onPress={() => router.push("/home")} title="Go to Home" />
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

export default PlanetScreen;
