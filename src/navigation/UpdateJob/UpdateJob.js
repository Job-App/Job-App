import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UpdateJobForm from "./../../components/UpdateJobForm/UpdateJobForm";
import HeaderBar from "./../../components/HeaderBar/Headerbar";

const { width, height } = Dimensions.get("screen");

const UpdateJob = ({ navigation, route }) => {
  const Stack = createStackNavigator();
  return (
    <>
      <HeaderBar
        navigation={Stack}
        left="Back"
        leftNav="Homepage"
        right=""
        rightNav=""
      />
      <Text style={styles.text}>Update Job</Text>
      <View style={styles.formContainer}>
        <UpdateJobForm
          id={route.params.id}
          company={route.params.company}
          title={route.params.title}
          applied={route.params.applied}
          deadline={route.params.deadline}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: "bold",
    margin: 24,
    marginBottom: 12,
  },
  formContainer: {
    width: width - 48,
    alignSelf: "center",
  },
});

export default UpdateJob;
