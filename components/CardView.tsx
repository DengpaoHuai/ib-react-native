import { StyleSheet, Text, View } from "react-native";

type CardViewProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const CardView: React.FC<CardViewProps> = ({
  title = "default",
  description = "default",
  children,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

export default CardView;
