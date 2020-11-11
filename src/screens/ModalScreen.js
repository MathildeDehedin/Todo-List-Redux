import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer";

function ModalScreen({ navigation }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSaveNote = (value) => {
    dispatch(addItem(value));
    navigation.navigate("List");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="circle-with-cross" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <Text style={{ color: "#444", fontSize: 20 }}>Any idea?</Text>
          <TextInput
            style={styles.inputText}
            numberOfLines={1}
            onChangeText={(value) => setValue(value)}
            value={value}
            clearButtonMode="while-editing"
          />
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: "#E1C5C1",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            onPress={() => onSaveNote(value)}
          >
            <Entypo name="add-to-list" size={24} color="#C18E60" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    height: "30%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  closeButtonContainer: {
    position: "absolute",
    alignItems: "flex-end",
    right: 10,
  },
  closeButton: {
    top: 10,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    height: 50,
    width: 200,
    padding: 5,
    borderColor: "grey",
    borderBottomWidth: 1,
  },
});

export default ModalScreen;
