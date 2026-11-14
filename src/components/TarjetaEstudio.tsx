import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <View style={estilos.headerTarjeta}>
        <Text style={estilos.titulo}>{titulo}</Text>
        {enCurso && (
          <View style={estilos.badgeContainer}>
            <Text style={estilos.badge}>En Curso</Text>
          </View>
        )}
      </View>
      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: { padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1 },
  finalizado: { backgroundColor: "#ffffff", borderColor: "#ccc" },
  enCurso: { backgroundColor: "#eef2ff", borderColor: "#6366f1" },
  headerTarjeta: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  titulo: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  subtitulo: { fontSize: 14, color: "#555", marginTop: 4 },
  anio: { fontSize: 12, color: "#888", marginTop: 2 },
  // Estilo de cápsula morada exigido en el reto:
  badgeContainer: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badge: { color: "#ffffff", fontWeight: "bold", fontSize: 10 },
});