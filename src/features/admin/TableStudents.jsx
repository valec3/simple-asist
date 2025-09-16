"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  TextField,
  MenuItem,
  useMediaQuery,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

const daysMap = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const students = [
  {
    id: "stu-001",
    code: "20250001",
    full_name: "Juan Pérez",
    email: "juan.perez@uni.edu.pe",
    number: "987654321",
    faculty: "FACULTAD DE CIENCIAS AGRARIAS",
    school: "Escuela Profesional de Ingeniería Agronómica",
    selectedDays: [1, 3], // Lunes y Miércoles
    createdAt: new Date().toISOString(),
  },
  {
    id: "stu-002",
    code: "20250002",
    full_name: "María Gómez",
    email: "maria.gomez@uni.edu.pe",
    number: "987654321",
    faculty: "FACULTAD DE INGENIERÍA",
    school: "Escuela Profesional de Ingeniería Civil",
    selectedDays: [2, 4, 6], // Martes, Jueves y Sábado
    createdAt: new Date().toISOString(),
  },
];

// --- Header con buscador, filtros y botón ---
const TableHeaderStudents = ({ onSearch, onFilterFaculty, onAdd }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{ mb: 2 }}
      alignItems="center"
      justifyContent="space-between"
    >
      <TextField
        label="Buscar por nombre o código"
        variant="outlined"
        size="small"
        onChange={(e) => onSearch(e.target.value)}
        sx={{ flex: 1, width: "100%" }}
      />
      <TextField
        select
        label="Filtrar por facultad"
        variant="outlined"
        size="small"
        onChange={(e) => onFilterFaculty(e.target.value)}
        sx={{ minWidth: 200 }}
      >
        <MenuItem value="">Todas</MenuItem>
        <MenuItem value="FACULTAD DE CIENCIAS AGRARIAS">
          Ciencias Agrarias
        </MenuItem>
        <MenuItem value="FACULTAD DE INGENIERÍA">Ingeniería</MenuItem>
      </TextField>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAdd}
        sx={{ bgcolor: "#145cfc" }}
      >
        Nuevo Estudiante
      </Button>
    </Stack>
  );
};

const TableStudents = () => {
  const [search, setSearch] = useState("");
  const [filterFaculty, setFilterFaculty] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Filtrado dinámico
  const filteredStudents = students.filter(
    (s) =>
      (s.full_name.toLowerCase().includes(search.toLowerCase()) ||
        s.code.includes(search)) &&
      (filterFaculty === "" || s.faculty === filterFaculty)
  );

  return (
    <div>
      <TableHeaderStudents
        onSearch={setSearch}
        onFilterFaculty={setFilterFaculty}
        onAdd={() => alert("Agregar nuevo estudiante")}
      />

      {/* Vista tipo tabla (desktop) */}
      {!isMobile ? (
        <TableContainer
          component={Paper}
          sx={{ borderRadius: 3, boxShadow: 3 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="tabla de estudiantes">
            <TableHead sx={{ bgcolor: "#f4f7fe" }}>
              <TableRow>
                <TableCell>
                  <b>Código</b>
                </TableCell>
                <TableCell>
                  <b>Nombre</b>
                </TableCell>
                <TableCell>
                  <b>Numero</b>
                </TableCell>
                <TableCell>
                  <b>Facultad</b>
                </TableCell>
                <TableCell>
                  <b>Escuela</b>
                </TableCell>
                <TableCell>
                  <b>Días</b>
                </TableCell>
                <TableCell align="center">
                  <b>Acciones</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id} hover>
                  <TableCell>{student.code}</TableCell>
                  <TableCell>{student.full_name}</TableCell>
                  <TableCell>{student.number}</TableCell>
                  <TableCell>{student.faculty}</TableCell>
                  <TableCell>{student.school}</TableCell>
                  <TableCell>
                    {student.selectedDays.map((d) => daysMap[d]).join(", ")}
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button variant="outlined" size="small" color="primary">
                        <EditSquareIcon sx={{ fontSize: 18, mr: 0.5 }} />
                      </Button>
                      <Button variant="outlined" size="small" color="error">
                        <DeleteIcon sx={{ fontSize: 18, mr: 0.5 }} />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        // Vista tipo card (mobile)
        <Stack spacing={2}>
          {filteredStudents.map((student) => (
            <Card key={student.id} sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {student.full_name} ({student.code})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {student.faculty} - {student.school}
                </Typography>
                <Typography variant="body2">📞 {student.number}</Typography>
                <Typography variant="body2">
                  Días: {student.selectedDays.map((d) => daysMap[d]).join(", ")}
                </Typography>
                <Stack direction="row" spacing={1} mt={1}>
                  <Button variant="outlined" size="small" color="primary">
                    <EditSquareIcon sx={{ fontSize: 18, mr: 0.5 }} />
                  </Button>
                  <Button variant="outlined" size="small" color="error">
                    <DeleteIcon sx={{ fontSize: 18, mr: 0.5 }} />
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </div>
  );
};

export default TableStudents;
