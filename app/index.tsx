import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";

export default function Index() {
  function handleGoServices() {
    router.navigate({
      pathname: "/services/[servicesId]",
      params: { servicesId: 646546546 },
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={styles.headerText}>Encontre seu profissional</Text>
          <Text style={styles.headerSection}>
            Mais de 500 tipos de serviços em um só lugar Encontre profissionais
            e contrate serviços para tudo o que precisar
          </Text>

          <View style={styles.headerInputGroup}>
            <TextInput
              style={styles.headerInput}
              placeholder="Procure por serviços"
            />
            <Entypo name="magnifying-glass" size={24} color="black" />
          </View>
        </View>

        <View style={styles.content}>
          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>

          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>

          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>

          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>

          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>

          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>

          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>

          <Pressable onPress={handleGoServices} style={styles.card}>
            <Ionicons name="settings" size={50} color="black" />
            <Text>Assistencia Tecnica</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
  },
  header: {
    backgroundColor: "#FFF",
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  headerText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },

  headerSection: {
    marginTop: 20,
    marginBottom: 20,
  },

  headerInputGroup: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerInput: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  card: {
    padding: 25,
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 8,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
    gap: 10,
  },
});
