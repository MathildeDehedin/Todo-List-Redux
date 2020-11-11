import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/reducer";

function ListView() {
  const listItems = useSelector((state) => state.itemList);

  const dispatch = useDispatch();
  return (
    <View style={styles.containerListView}>
      {listItems.length === 0 ? (
        <View style={styles.listNothing}>
          <Text style={{ fontSize: 20 }}>Nothing to do yet, lucky you ! </Text>
        </View>
      ) : (
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeItem(item.id))}
                style={styles.button}
              >
                <Entypo name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={"My todo list"} />
        <ListView />
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Modal")}
            style={styles.buttonAdd}
          >
            <Ionicons name="ios-add" color="#fff" size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerListView: {
    backgroundColor: "#E1C5C1",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listNothing: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#E1C5C1",
  },
  modalContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
    right: 10,
    bottom: 20,
  },
  buttonAdd: {
    backgroundColor: "#24695C",
    borderRadius: 35,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 0.2,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "400",
  },
  button: {
    padding: 3,
  },
});

export default ListScreen;
