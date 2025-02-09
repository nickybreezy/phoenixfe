import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const questionnaire = () => {
  // Define Questions
  const questions = [
    { id: 1, question: "Wat is je fitnessdoel?", options: ["Afvallen", "Spiermassa opbouwen", "Sportprestaties verbeteren (Voetbal/Hockey)", "Conditie"] },
    { id: 2, question: "Hoe vaak wil je sporten?", options: ["1-2 keer per week", "3-4 keer per week", "5+ keer per week"] },
    { id: 3, question: "Hoe lang wil je per sessie trainen?", options: ["30 minuten", "45 minuten", "60 minuten"] },
    { id: 4, question: "Welke lichaamsdelen wil je trainen?", options: ["Bovenlichaam", "Onderlichaam", "Core", "Alles"] },
    { id: 5, question: "Hoe ervaren ben je?", options: ["Beginner", "Gemiddeld", "Gevorderd"] },
  ];

  // State Management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const router = useRouter();
  // Handle Option Selection
  const handleOptionSelect = (option: string) => {
    setResponses({ ...responses, [currentQuestionIndex]: option });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("All questions answered:", responses);
	  const workoutPlan = generateWorkoutPlan(responses);
	  

	 
		// Navigate to 'results' and pass exercises as parameters
		router.push({
      pathname: '/(tabs)/ResultsScreen', // This refers to app/results.tsx
      params: { exercises: JSON.stringify(workoutPlan) }, // Serialize workoutPlan
    });
    
	
      console.log("Generated Workout Plan:", workoutPlan);
     
    }
  };

  // Generate Workout Plan
  const generateWorkoutPlan = (responses: Record<number, string>) => {
    const plan = {
      frequency: responses[1],
      duration: responses[2],
      bodyParts: responses[3],
      experience: responses[4],
    };

	let exercises: string[] = [];
    if (responses[0] === "Afvallen") {
      exercises = ["Cardio", "HIIT"];
    } else if (responses[0] === "Spiermassa opbouwen") {
      exercises = ["Strength Training", "Weightlifting"];
    }

    return { ...plan, exercises };
  };

  // Current Question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Display Current Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        {/* Display Options */}
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(option)}
            >
              <View style={styles.questionContainer}><Text style={styles.optionText}>{option}</Text>
              <Image source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d6380f9-0dcd-41c5-b2b7-5b98462cf4b3"}} resizeMode = {"stretch"}  style={{  borderRadius: 47,  width: 86, height: 79  }}/></View>
              
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEFF4",
  },
  scrollView: {
   flex: 1,
  },
  questionContainer: {
    alignItems: "center",
    
    borderRadius: 21,
    paddingVertical: 20,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
  },
  questionText: {
    color: "#072E55",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 102,
    marginLeft: 25,
    width: 297,
    flex: 1,
  },
  optionsContainer: {
   flexDirection: "column",
   justifyContent: "space-between",
   marginBottom: 14,
   marginHorizontal: 23,
  },
  optionButton: {
    backgroundColor: "#659ED5",
    borderRadius: 49,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginVertical: 8,
    alignItems: "center",
   
  },
  optionText: {
    color: "#EFEFEF",
    fontSize: 36,
    marginTop: 29,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default questionnaire;
