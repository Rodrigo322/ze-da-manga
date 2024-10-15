import { Pressable, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function ServicesId() {
  const { servicesId } = useLocalSearchParams();

  function goBack() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text>Serviço {servicesId}</Text>
      <Pressable onPress={goBack}>
        <Text>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
});
