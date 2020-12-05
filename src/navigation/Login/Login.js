import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import HeaderBar from "./../../components/HeaderBar/Headerbar";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { openDatabase } from "react-native-sqlite-storage";

const { width, height } = Dimensions.get('screen')

 {/* Displays profile information*/}
const Login = () => {
  const Stack = createStackNavigator();
  const db = openDatabase("profile.db");
  const navigation = useNavigation();
  let [details, setDetails] = useState({});

  const sqlQuery = `SELECT * FROM profile
            WHERE id = 1`;

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(sqlQuery, [], (txR, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setDetails(temp[0]);
      });
    });
  }, []);
  console.log(details);

  if (details == undefined) {
    details = {
      id: undefined,
      name: undefined,
      title: undefined,
      description: undefined,
    };
  }

  return (
    <View style={styles.container}>
      <HeaderBar navigation={Stack} left="Back" leftNav="Homepage" />
      <Image
        style={styles.avatar}
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbMUGNDVN_JkCPn75qh5u1GKYDXcOFnt2xYw&usqp=CAU",
        }}
      />
      <View style={styles.body} testID="login_page">
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{details.name || "N/A"}</Text>
          <Text style={styles.info}>{details.title || "N/A"}</Text>
          <Text style={styles.description}>{details.description || "N/A"}</Text>
        </View>
        <View>
          <TouchableOpacity
            testID="update_profile"
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("UpdateProfile")}
          >
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  body: {
    marginTop: 200,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 100,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    width: width-108,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  }
});
export default Login;
