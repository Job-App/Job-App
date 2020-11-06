import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { openDatabase } from "react-native-sqlite-storage";

const UpdateProfile = () => {
  const navigation = useNavigation();
  const db = openDatabase("profile.db");

  let [name, setName] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  let setProfile = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS profile(id INTEGER PRIMARY KEY, name VARCHAR(225), title VARCHAR(225), description VARCHAR(225));",
        []
      );

    //   tx.executeSql(
    //     "DROP TABLE IF EXISTS profile",
    //     []
    //   );


      tx.executeSql(
        `INSERT OR REPLACE INTO profile
        VALUES(1, ?, ?, ?)`,
        [name, title, description],
        (txR, results) => {
          if (results.rowsAffected > 0) {
            //CHECK: alert isn't working insert console.log here
            console.log("ResultsAdded", results.rowsAffected);
            Alert.alert(
              "Success",
              "Your profile was successfully updated",
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate("Login"),
                },
              ],
              {
                cancelable: false,
              }
            );
          } else Alert.alert("Error", "Submission Failed");
        }
      );

      tx.executeSql(
        "select * from profile",
        [],
        (_, { rows: { _array } }) => console.log(_array),
        () => console.log("error fetching")
      );
    });
  };

  return (
    <>
      <View>
        <TextInput
          styles={styles.input}
          placeholder="Name"
          onChangeText={(nameI) => setName(nameI)}
          clearButtonMode="always"
        />
        <TextInput
          styles={styles.input}
          placeholder="Title"
          onChangeText={(titleI) => setTitle(titleI)}
          clearButtonMode="always"
        />
        <TextInput
          styles={styles.input}
          placeholder="Description"
          onChangeText={(descriptionI) => setDescription(descriptionI)}
          clearButtonMode="always"
        />
        <Button
          style={styles.buttonContainer}
          onPress={setProfile}
          title="Submit"
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
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  input: {
    height: 25,
    fontSize: 18,
  },
});

export default UpdateProfile;
