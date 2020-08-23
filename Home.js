import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { DATA } from "./Data";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  //icon
  //render function :
  //icon :
  const renderIcon = (isCompleted) => {
    if (isCompleted) {
      return (
        <TouchableOpacity>
          <Ionicons name="md-checkbox" size={30} color="green" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity>
          <Ionicons name="md-checkbox" size={30} color="#1E1E1E" />
        </TouchableOpacity>
      );
    }
  };
  //items

  const Item = ({ title, repetetion, backgroundColor, isCompleted }) => (
    <TouchableOpacity
      style={{
        height: 85,
        backgroundColor: "#fff",
        marginTop: 20,
        justifyContent: "center",
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 5,
        backgroundColor: backgroundColor,
      }}
      onPress={() => navigation.push("Paragraph")}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {renderIcon(isCompleted)}
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#1E1E1E", fontSize: 18, fontWeight: "bold" }}>
            {title}
          </Text>
          <Text style={{ color: "#1E1E1E", fontSize: 16, marginTop: 10 }}>
            عدد التكرار {repetetion}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  //
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      repetetion={item.repetetion}
      backgroundColor={item.backgroundColor}
      isCompleted={item.isCompleted}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1, width: "100%" }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2328",
    alignItems: "center",
    justifyContent: "center",
  },
});
