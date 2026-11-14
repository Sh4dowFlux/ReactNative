import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function EstudiosScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.headerContenedor}>
        <Ionicons name="school" size={60} color="#2563eb" />
        <Text style={estilos.nombre}>Pepito Pérez Gómez</Text>
        <Text style={estilos.subtituloHeader}>Estudios Realizados</Text>
      </View>

      <TarjetaEstudio
        titulo="Bachiller"
        institucion="Institución Educativa Municipal"
        anio={2015}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico en Sistemas"
        institucion="Colegio ABC"
        anio={2018}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Tecnólogo en ADSO"
        institucion="SENA"
        anio={2026}
        enCurso={true}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  headerContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtituloHeader: { fontSize: 14, color: "#2563eb", fontWeight: "600" },
});

