import { useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  /*useEffect(() => {
    const preventRouting = (
      e: EventArg<
        "beforeRemove",
        true,
        {
          action: NavigationAction;
        }
      >
    ) => {
      e.preventDefault();
    };
    navigation.addListener("beforeRemove", preventRouting);

    return () => {
      navigation.removeListener("beforeRemove", preventRouting);
    };
  }, []);*/

  return (
    <View style={styles.mainContainer}>
      <Text>Bienvenue</Text>
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
