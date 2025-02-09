import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorkoutCard = ({ exercise }: { exercise: { name: string; frequency: string; duration: string } }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.details}>{exercise.frequency}</Text>
      <Text style={styles.details}>{exercise.duration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#659ED5",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    fontSize: 16,
    color: "#fff",
  },
});

export default WorkoutCard;
