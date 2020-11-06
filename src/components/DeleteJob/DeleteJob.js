import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { openDatabase } from "react-native-sqlite-storage";
import { withNavigation } from "react-navigation";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

var db = openDatabase("table_applications.db");
const DeleteJob = (props) => {
  const navigation = useNavigation();

  let deleteJob = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM  table_applications WHERE job_id = ? ",
        [props.id],
        (tx, results) => {
          console.log("ResultsDelete", results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              "Success",
              "Job Application Deleted Successfully",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate("Homepage"),
                },
              ],
              {
                cancelable: false,
              }
            );
          } else {
              Alert.alert(
            "Error: Job ID not found",
            "Job may have already been deleted.",
            [
              {
                text: "Ok",
                onPress: () => navigation.navigate("Homepage"),
              },
            ],
            {
              cancelable: false,
            }
          );
          }
        }
      );
    });
  };

  return (
    <View>
      <TouchableOpacity
        testid = "delete-app"
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => deleteJob()}
      >
        <Text style={styles.text}>Delete Job</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width - 96,
    backgroundColor: "#0394fc",
    padding: 12,
    marginTop: 24,
  },
  text: {
    color: "#FFFAAA",
    textAlign: "center",
  },
});

export default DeleteJob;
