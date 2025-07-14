import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function CameraScreen() {
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
        -- this is the camera screen --
      </Text>

      <Link href="/">
        <Text style={{ color: "blue", marginTop: 10 }}>Go Home</Text>
      </Link>
    </View>
  );
}
