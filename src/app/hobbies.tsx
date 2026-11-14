import { Platform, ScrollView, StyleSheet, Text } from "react-native";
import { Alert } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function HobbiesScreen() {
  const mostrarDetalle = (hobby: string, detalle: string) => {
    if (Platform.OS === "web") {
      window.alert(`${hobby}\n\n${detalle}`);
    } else {
      Alert.alert(hobby, detalle);
    }
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloSeccion}>Mis Pasatiempos</Text>

      <TarjetaHobby
        titulo="Programar videojuegos indie"
        icono="game-controller-outline"
        onPress={() => mostrarDetalle("Videojuegos Indie", "Me encanta diseñar pequeños juegos en Godot y Python durante mi tiempo libre.")}
      />

      <TarjetaHobby
        titulo="Leer libros de ciencia ficción"
        icono="book-outline"
        onPress={() => mostrarDetalle("Lectura", "Fanático de autores como Isaac Asimov y de las novelas de ciberpunk.")}
      />

      <TarjetaHobby
        titulo="Escuchar música Lofi y Rock"
        icono="headset-outline"
        onPress={() => mostrarDetalle("Música", "La música es mi compañera ideal mientras escribo código y desarrollo apps.")}
      />

      <TarjetaHobby
        titulo="Salir a montar bicicleta"
        icono="bicycle-outline"
        onPress={() => mostrarDetalle("Ciclismo", "Practico rutas de montaña los fines de semana para despejar la mente.")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloSeccion: { fontSize: 18, fontWeight: "bold", color: "#1e293b", marginBottom: 12 },
});