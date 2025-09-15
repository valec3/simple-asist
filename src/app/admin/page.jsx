import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
const page = () => {
  return (
    <div className="bg-blue-100">
      <div className="flex items-center justify-between py-2 bg-gray-100 container-page">
        <div className="flex items-center space-x-2">
          <PeopleIcon style={{ fontSize: 50, color: "#3f51b5" }} />
          <Typography
            variant="h5"
            component="h2"
            color="#3f51b5"
            fontWeight={"bold"}
          >
            Bienvenido al Panel de Administración
          </Typography>
        </div>
        <Button variant="contained" color="primary">
          Salir
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-4 w-full container-page py-8 gap-4">
        <Card
          className="flex gap-x-4 items-center p-8 py-12 cursor-pointer hover:shadow-xl"
          style={{ minWidth: 250, borderRadius: 16 }}
          sx={{
            border: "2px solid #ddd",
            transition: "all 0.3s ease-in-out",
            ":hover": {
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              borderColor: "#3f51b5",
            },
          }}
        >
          <EditDocumentIcon
            style={{
              fontSize: 50,
              color: "#578bfc",
              padding: 8,
              borderRadius: 8,
            }}
            className="bg-blue-100"
          />
          <div>
            <Typography variant="h6" fontWeight={"bold"}>
              Llamado de lista
            </Typography>
            <Typography variant="body2">
              Gestiona y realiza el llamado de lista de los estudiantes.
            </Typography>
          </div>
        </Card>
        <Card
          className="flex gap-x-4 items-center p-8 py-12 cursor-pointer hover:shadow-lg"
          style={{ minWidth: 250, borderRadius: 16 }}
        >
          <DescriptionIcon style={{ fontSize: 50, color: "#985" }} />
          <div>
            <Typography variant="h6" fontWeight={"bold"}>
              Historial de asistencias
            </Typography>
            <Typography variant="body2">
              Ver registros detallados de asistencias pasadas.
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
