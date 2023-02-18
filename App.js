import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [addedText, setAddedText] = useState("");
  const [goals, setGoals] = useState([]);
  const goalsAdd = () => {
    setGoals((prev) => [...prev, addedText]);
  };
  const inputChange = (text) => {
    setAddedText(text);
  };
  console.log(goals);
  return (
    //view used for hold the layout and our component.. we need to wrap our component within view
    //text is just for string value
    <View style={styles.main}>
      <View style={styles.container}>
        <TextInput
          placeholder="Type goals"
          style={styles.textInput}
          onChangeText={inputChange}
        />
        <Button title="Add goals" onPress={goalsAdd} />
      </View>
      {/* Scroolview render all the items which is not visible as well. That will cause performance issues */}
      <View style={styles.goalsStyle}>
        <ScrollView>
          {goals.map((goal) => (
            <Text key={goal} style={styles.goalItem}>
              {goal}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: "#fff",
  },
  main: {
    padding: 40,
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#eee",
    width: "100%",
    padding: 10,
  },
  goalsStyle: {
    flex: 3,
  },
  goalItem: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    color: "white",
  },
});
