"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import {
  CheckCircle,
  Cancel,
  AccessTime,
  Groups,
  ArrowBack,
  Search,
} from "@mui/icons-material";
import StackStudents from "./StackStudents";
import TableStudentsDesktop from "./TableStudentsDesktop";
import studentService from "@/firebase/students";
import { useRouter } from "next/navigation";
import attendanceService from "@/firebase/attendance";
// Materias ejemplo
const optionsFilter = ["Obligatorio", "Todos"];

const AttendanceScreen = () => {
  const [students, setStudents] = useState([]);
  const [materia, setMateria] = useState("");
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // const [attendance, setAttendance] = useState([]);
  const handleSaveAttendance = async () => {
    // Lógica para guardar la
    setIsLoading(true);
    console.log("Guardar asistencia", students);
    const today = new Date();
    const attendanceData = {
      date: today.toISOString().split("T")[0], // Fecha en formato YYYY-MM-DD
      students: students.map((s) => ({
        id: s.id,
        estado: s.estado,
      })),
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula una operación de 2 segundos
    console.log(attendanceData);
    // attendanceService.addAttendance(attendanceData);
  };

  const handleEstado = (id, estado) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, estado } : s))
    );
  };
  useEffect(() => {
    const fetchStudents = async () => {
      const data = await studentService.getAllStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  // Contadores
  const presentes = students.filter((s) => s.estado === "Presente").length;
  const ausentes = students.filter((s) => s.estado === "Ausente").length;
  const tardanzas = students.filter((s) => s.estado === "Tardanza").length;
  const pendientes = students.filter((s) => s.estado === "Pendiente").length;

  // Filtro por búsqueda
  const filteredStudents = students.filter(
    (s) =>
      s.full_name.toLowerCase().includes(search.toLowerCase()) ||
      s.code.includes(search.toLowerCase())
  );
  console.log(isLoading);
  return (
    <Box p={3} sx={{ backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        gap={2}
        mb={3}
        sx={{ backgroundColor: "white", p: 2, borderRadius: 2, boxShadow: 1 }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Button
            startIcon={<ArrowBack />}
            variant="text"
            sx={{ textTransform: "none" }}
            onClick={() => router.back()}
          >
            Volver
          </Button>
          <Typography variant="h5" fontWeight="bold" color="primary">
            Llamado de Lista ({new Date().toLocaleDateString("es-ES")})
          </Typography>
        </Box>

        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
          <TextField
            select
            size="small"
            label="Horario"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            sx={{ minWidth: { xs: "100%", sm: 200 } }}
          >
            {optionsFilter.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            size="small"
            placeholder="Buscar por código..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: "gray" }} />,
            }}
            sx={{ minWidth: { xs: "100%", sm: 220 } }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveAttendance}
          >
            Guardar Asistencia
          </Button>
        </Box>
      </Box>

      {/* Indicadores */}
      <Grid
        container
        spacing={2}
        mb={3}
        sx={{
          width: "100%",
        }}
        justifyContent="center"
        alignItems="stretch"
        display={{ sm: "flex" }}
      >
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            minWidth: { xs: 110, md: 250 },
            flexGrow: 1,
          }}
        >
          <Card sx={{ borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <CheckCircle color="success" fontSize="large" />
              <Typography variant="body1">Presentes</Typography>
              <Typography variant="h5" fontWeight="bold">
                {presentes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          sx={{ minWidth: { xs: 110, md: 250 }, flexGrow: 1 }}
        >
          <Card sx={{ borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Cancel color="error" fontSize="large" />
              <Typography variant="body1">Ausentes</Typography>
              <Typography variant="h5" fontWeight="bold">
                {ausentes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          sx={{ minWidth: { xs: 110, md: 250 }, flexGrow: 1 }}
        >
          <Card sx={{ borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <AccessTime color="warning" fontSize="large" />
              <Typography variant="body1">Tardanzas</Typography>
              <Typography variant="h5" fontWeight="bold">
                {tardanzas}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          sx={{ minWidth: { xs: 110, md: 250 }, flexGrow: 1 }}
        >
          <Card sx={{ borderRadius: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Groups color="primary" fontSize="large" />
              <Typography variant="body1">Pendientes</Typography>
              <Typography variant="h5" fontWeight="bold">
                {pendientes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabla de estudiantes */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" mb={2} fontWeight="bold">
            Lista de Estudiantes
          </Typography>
          {!isMobile ? (
            <TableStudentsDesktop
              filteredStudents={filteredStudents}
              handleEstado={handleEstado}
            />
          ) : (
            <StackStudents
              filteredStudents={filteredStudents}
              handleEstado={handleEstado}
            />
          )}
        </CardContent>
      </Card>

      {/* loader */}
      {isLoading && (
        <Box
          sx={{
            textAlign: "center",
            py: 2,
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default AttendanceScreen;
