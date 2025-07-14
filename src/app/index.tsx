import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Welcome to the Camera App!
      </Text>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Explore the features and functionalities.
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontStyle: "italic",
          fontSize: 10,
        }}
      >
        -- this is the home screen --
      </Text>

      <Link href="/home/(feed)/for-you">
        <Text style={{ color: "blue", marginTop: 10 }}>Go to For You</Text>
      </Link>

      <Link href="/camera" asChild>
        <Pressable
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "#007AFF",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="photo-camera" size={30} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}
