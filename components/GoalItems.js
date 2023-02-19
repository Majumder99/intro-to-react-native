import { StyleSheet, Text } from "react-native";

const GoalItems = ({ itemData }) => {
  return <Text style={styles.goalItem}>{itemData.item.text}</Text>;
};

export default GoalItems;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    color: "white",
  },
});
