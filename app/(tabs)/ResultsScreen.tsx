import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import WorkoutCard from "../../components/WorkoutCard"; // Import the WorkoutCard component
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const ResultsScreen = () => {

  const router = useRouter();
  const params = useLocalSearchParams();

 
  // Ensure `exercises` is parsed into an array
  const exercises = Array.isArray(params.exercises)
    ? params.exercises.map((exercise) => JSON.parse(exercise))
    : params.exercises
    ? [JSON.parse(params.exercises)]
    : [];
    
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Workout Plan</Text>
      
      {exercises.map((exercise: { name: string; frequency: string; duration: string }, index: number) => (
        <WorkoutCard key={index} exercise={exercise} />
      ))}

       
      <Link href="/HomeScreen" asChild>
      <Pressable    style={styles.button}>
      <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
    </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#467199",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ResultsScreen;
