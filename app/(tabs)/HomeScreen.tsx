import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image,  TouchableOpacity,
  Modal,
  Pressable, 
  TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';



const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = (option: string) => {
    console.log(`Option selected: ${option}`);
    router.push({
      pathname: '/(tabs)/AIProgram'
    });
    setModalVisible(false); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.scrollView}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#86AED4", "#3A658E"]}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#16334F", "#16334F"]}
          style={styles.linearGradient}
        >
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb572343-30c5-4698-893c-96d879a17658",
            }}
            resizeMode="stretch"
            style={styles.streakImage}
          />
          <Text style={styles.streakText}>{"46 Day\n\n Streak"}</Text>
        </LinearGradient>
  
        <View style={styles.row}>
          <View style={styles.lastWorkoutCard}>
            <Text style={styles.cardText}>{"Last Workout"}</Text>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e7b0074-2352-42ff-bd63-1a608e12f1a8",
              }}
              resizeMode="stretch"
              style={styles.lastWorkoutImage}
            />
          </View>
  
          <TouchableOpacity
            style={styles.startWorkoutCard}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.startWorkoutContainer}>
              <Image
                source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/390d144d-627e-4230-974d-8acb7a55ed9b",
                }}
                resizeMode="stretch"
                style={styles.startWorkoutImage}
              />
              <Text style={styles.startWorkoutText}>Start Workout</Text>
            </View>
          </TouchableOpacity>
  
          <Modal
  transparent={true}
  visible={modalVisible}
  animationType="fade"
  onRequestClose={() => setModalVisible(false)}
>
  <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
      <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#92DD3B", "#DBE9CA"]}
          style={styles.linearGradient}
        > <Pressable
          style={styles.modalButton}
          onPress={() => handleButtonClick("AIProgram")}
        >
          <Text style={styles.modalButtonText}>Personalized Training Program</Text>
        </Pressable></LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#92DD3B", "#DBE9CA"]}
          style={styles.linearGradient}
        > <Pressable
          style={styles.modalButton}
          onPress={() => handleButtonClick("Option 2")}
        >
          <Text style={styles.modalButtonText}>Pre-Built Workout Training</Text>
        </Pressable></LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#92DD3B", "#DBE9CA"]}
          style={styles.linearGradient}
        ><Pressable
          style={styles.modalButton}
          onPress={() => handleButtonClick("Option 3")}
        >
          <Text style={styles.modalButtonText}>Build Your Own
          </Text>
        </Pressable></LinearGradient>
        
      </View>
    </View>
  </TouchableWithoutFeedback>
</Modal>

        </View>
  
        <View style={styles.iconsRow}>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b42c130d-5e4b-4834-85f7-a957a1e6fa8c",
            }}
            resizeMode="stretch"
            style={styles.iconImage}
          />
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fe1f699-858c-4d06-b602-03bb1f3e5efb",
            }}
            resizeMode="stretch"
            style={styles.iconImage}
          />
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb0e3bab-ee5d-4c7a-8ef5-8c88a79b2b08",
            }}
            resizeMode="stretch"
            style={styles.iconImage}
          />
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5157b59-9e2f-43b1-ba01-30d69ba3bfa5",
            }}
            resizeMode="stretch"
            style={styles.iconImage}
          />
        </View>
      </LinearGradient>
      <View style={styles.footerBar}></View>
    </ScrollView>
  </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    paddingTop: 89,
  },
  linearGradient: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 31,
    paddingHorizontal: 13,
    marginBottom: 72,
    marginHorizontal: 24,
  },
  streakImage: {
    width: 94,
    height: 87,
    marginRight: 23,
  },
  streakText: {
    color: "#FFFFFF",
    fontSize: 40,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 19,
    marginHorizontal: 24,
  },
  lastWorkoutCard: {
    width: 150,
    backgroundColor: "#C24315",
    borderRadius: 20,
    paddingVertical: 25,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  cardText: {
    color: "#1E1E1E",
    fontSize: 16,
    marginBottom: 8,
    marginHorizontal: 25,
  },
  lastWorkoutImage: {
    height: 60,
    marginHorizontal: 44,
  },
  startWorkoutCard: {
    width: 161,
    backgroundColor: "#92DC3A",
    borderRadius: 21,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  startWorkoutContainer: {
    marginTop: 22,
  },
  startWorkoutImage: {
    height: 101,
  },
  startWorkoutText: {
    position: "absolute",
    top: -4,
    left: 12,
    color: "#000000",
    fontSize: 16,
  },
 
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    width: 250,
    padding: 20,

    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButton: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6538A1",
    borderRadius: 16,
    paddingVertical: 22,
    marginBottom: 281,
    marginHorizontal: 13,
  },
  iconImage: {
    width: 70,
    height: 70,
    marginRight: 12,
  },
  footerBar: {
    height: 5,
    backgroundColor: "#000000",
    borderRadius: 100,
    marginHorizontal: 129,
  },
});


export default HomeScreen;
