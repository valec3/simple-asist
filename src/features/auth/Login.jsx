"use client";
import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  // Función simulada de login
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email === "admin@correo.com" && password === "123456") {
        setSuccess(true);
        router.push("/admin");
        router;
      } else {
        setError("Credenciales inválidas. Intenta de nuevo.");
      }
    }, 1500); // Simula un delay de servidor
  };

  return (
    <Paper
      elevation={2}
      style={{
        padding: "32px",
        margin: "40px auto",
        borderRadius: "16px",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
      }}
      sx={{ width: { xs: "90%", sm: "400px" } }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        align="center"
        fontWeight="bold"
        style={{ color: "#1d388e" }}
      >
        Sistema de Asistencia
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">¡Login exitoso!</Alert>}

      <form onSubmit={handleLogin} style={{ marginTop: "16px" }}>
        <TextField
          label="Correo Electrónico"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{
            marginTop: "16px",
            padding: "10px",
            backgroundColor: "#145cfc",
            fontWeight: "bold",
          }}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="info" />
          ) : (
            "Iniciar Sesión"
          )}
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
