import CardView from "@/components/CardView";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
      <Button title="Go to Details" onPress={() => {}} />
      <CardView title="hello">
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </CardView>
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
