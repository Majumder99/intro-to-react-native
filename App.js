import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    //view used for hold the layout and our component.. we need to wrap our component within view
    //text is just for string value
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button title="Hello" />
      </View>
      <Text style={{ borderWidth: 2, borderColor: "#eee", color: "#000" }}>
        Hello i am sourav
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 20,
    backgroundColor: "#eee",
    color: "#fff",
    marginBottom: 35,
  },
});
