import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TableStudents from "@/features/admin/TableStudents";

const Page = () => {
  const dataStudents = {
    totalStudents: 5,
    activeStudents: 4,
    promedioAsistencia: 80,
    inasistencias: 1,
  };

  return (
    <Box sx={{ bgcolor: "#f4f7fe", minHeight: "100vh" }}>
      {/* Header */}
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
          py: 2,
          borderRadius: 0,
          borderBottom: "2px solid #ddd",
          bgcolor: "white",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <PeopleIcon sx={{ fontSize: 48, color: "#3f51b5" }} />
          <Typography variant="h5" fontWeight="bold" color="#3f51b5">
            Panel de Administración
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Salir
        </Button>
      </Paper>

      {/* Opciones principales */}
      <Grid
        container
        spacing={3}
        sx={{ px: { xs: 2, md: 6 }, py: 6 }}
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              p: 4,
              borderRadius: 3,
              cursor: "pointer",
              border: "2px solid #eee",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                borderColor: "#3f51b5",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <EditDocumentIcon
              sx={{
                fontSize: 60,
                color: "#578bfc",
                bgcolor: "blue.50",
                p: 1.5,
                borderRadius: 2,
              }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Llamado de lista
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gestiona y realiza el llamado de lista de los estudiantes.
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              p: 4,
              borderRadius: 3,
              cursor: "pointer",
              border: "2px solid #eee",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                borderColor: "#3f51b5",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <DescriptionIcon sx={{ fontSize: 60, color: "#588" }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Historial de asistencias
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ver registros detallados de asistencias pasadas.
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Divider />

      {/* Métricas */}
      <Grid
        container
        spacing={3}
        sx={{ px: { xs: 2, md: 6 }, py: 6 }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                fontWeight="bold"
                color="text.secondary"
              >
                Total de Estudiantes
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                {dataStudents.totalStudents}
              </Typography>
            </Box>
            <PeopleIcon sx={{ fontSize: 54, color: "#3f51b5" }} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                fontWeight="bold"
                color="text.secondary"
              >
                Estudiantes Activos
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="orange">
                {dataStudents.activeStudents}
              </Typography>
            </Box>
            <PeopleIcon sx={{ fontSize: 54, color: "orange" }} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                fontWeight="bold"
                color="text.secondary"
              >
                Promedio de Asistencia
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="green">
                {dataStudents.promedioAsistencia}%
              </Typography>
            </Box>
            <BarChartIcon sx={{ fontSize: 54, color: "green" }} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                fontWeight="bold"
                color="text.secondary"
              >
                Total de Inasistencias
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="red">
                {dataStudents.inasistencias}
              </Typography>
            </Box>
            <TrendingUpIcon sx={{ fontSize: 54, color: "red" }} />
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <TableStudents />
      </Box>
    </Box>
  );
};

export default Page;
