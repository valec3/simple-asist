// seedFirestore.js
import { setDoc, doc } from "firebase/firestore";
import db from "./config.js";

export const faculties = [
  { id: "fac-ciencias-agrarias", name: "FACULTAD DE CIENCIAS AGRARIAS" },
  { id: "fac-ingenieria-agricola", name: "FACULTAD DE INGENIERIA AGRICOLA" },
  {
    id: "fac-civil-arquitectura",
    name: "FACULTAD DE INGENIERIA CIVIL Y ARQUITECTURA",
    websites: [
      "https://fisica.unap.edu.pe/",
      "https://matematicas.unap.edu.pe/",
    ],
  },
  { id: "fac-ingenieria-economica", name: "FACULTAD DE INGENIERIA ECONOMICA" },
  {
    id: "fac-ingenieria-estadistica-informatica",
    name: "FACULTAD DE INGENIERIA ESTADISTICA E INFORMATICA",
  },
  {
    id: "fac-geologica-metalurgica",
    name: "FACULTAD DE INGENIERIA GEOLOGICA Y METALURGICA",
  },
  {
    id: "fac-mecanica-electrica-electronica-sistemas",
    name: "FACULTAD DE INGENIERIA MECANICA ELECTRICA, ELECTRONICA Y SISTEMAS",
  },
  { id: "fac-minas", name: "FACULTAD DE INGENIERIA DE MINAS" },
  { id: "fac-quimica", name: "FACULTAD DE INGENIERIA QUIMICA" },
  { id: "fac-ciencias-biologicas", name: "FACULTAD DE CIENCIAS BIOLOGICAS" },
  { id: "fac-ciencias-salud", name: "FACULTAD DE CIENCIAS DE LA SALUD" },
  { id: "fac-enfermeria", name: "FACULTAD DE ENFERMERIA" },
  { id: "fac-medicina-humana", name: "FACULTAD DE MEDICINA HUMANA" },
  {
    id: "fac-medicina-veterinaria",
    name: "FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA",
  },
  {
    id: "fac-ciencias-contables",
    name: "FACULTAD DE CIENCIAS CONTABLES Y ADMINISTRATIVAS",
  },
  {
    id: "fac-ciencias-educacion",
    name: "FACULTAD DE CIENCIAS DE LA EDUCACION",
  },
  {
    id: "fac-ciencias-juridicas",
    name: "FACULTAD DE CIENCIAS JURIDICAS Y POLITICAS",
  },
  { id: "fac-ciencias-sociales", name: "FACULTAD DE CIENCIAS SOCIALES" },
  { id: "fac-trabajo-social", name: "FACULTAD DE TRABAJO SOCIAL" },
  {
    id: "fac-ciencias-adm-humanas",
    name: "FACULTAD DE CIENCIAS ADMINISTRATIVAS Y HUMANAS",
  },
];

export const schools = [
  // FACULTAD DE CIENCIAS AGRARIAS
  {
    id: "esc-ing-agronomica",
    name: "Escuela Profesional de Ingeniería Agronómica",
    facultyId: "fac-ciencias-agrarias",
  },
  {
    id: "esc-ing-agroindustrial",
    name: "Escuela Profesional de Ingeniería Agroindustrial",
    facultyId: "fac-ciencias-agrarias",
  },
  {
    id: "esc-ing-topografica",
    name: "Escuela Profesional de Ingeniería Topográfica y Agrimensura",
    facultyId: "fac-ciencias-agrarias",
  },

  // FACULTAD DE INGENIERIA AGRICOLA
  {
    id: "esc-ing-agricola",
    name: "Escuela Profesional de Ingeniería Agrícola",
    facultyId: "fac-ingenieria-agricola",
  },

  // FACULTAD DE INGENIERIA CIVIL Y ARQUITECTURA
  {
    id: "esc-ing-civil",
    name: "Escuela Profesional de Ingeniería Civil - Acred. ICACIT",
    facultyId: "fac-civil-arquitectura",
  },
  {
    id: "esc-arquitectura",
    name: "Escuela Profesional de Arquitectura y Urbanismo",
    facultyId: "fac-civil-arquitectura",
  },

  // FACULTAD DE INGENIERIA ECONOMICA
  {
    id: "esc-ing-economica",
    name: "Escuela Profesional de Ingeniería Económica",
    facultyId: "fac-ingenieria-economica",
  },

  // FACULTAD DE INGENIERIA ESTADISTICA E INFORMATICA
  {
    id: "esc-ing-estadistica-informatica",
    name: "Escuela Profesional de Ingeniería Estadística e Informática",
    facultyId: "fac-ingenieria-estadistica-informatica",
  },

  // FACULTAD DE INGENIERIA GEOLOGICA Y METALURGICA
  {
    id: "esc-ing-geologica",
    name: "Escuela Profesional de Ingeniería Geológica",
    facultyId: "fac-geologica-metalurgica",
  },
  {
    id: "esc-ing-metalurgica",
    name: "Escuela Profesional de Ingeniería Metalúrgica",
    facultyId: "fac-geologica-metalurgica",
  },

  // FACULTAD DE INGENIERIA MECANICA ELECTRICA, ELECTRONICA Y SISTEMAS
  {
    id: "esc-ing-electronica",
    name: "Escuela Profesional de Ingeniería Electrónica",
    facultyId: "fac-mecanica-electrica-electronica-sistemas",
  },
  {
    id: "esc-ing-mecanica-electrica",
    name: "Escuela Profesional de Ingeniería Mecánica Eléctrica",
    facultyId: "fac-mecanica-electrica-electronica-sistemas",
  },
  {
    id: "esc-ing-sistemas",
    name: "Escuela Profesional de Ingeniería de Sistemas",
    facultyId: "fac-mecanica-electrica-electronica-sistemas",
  },

  // FACULTAD DE INGENIERIA DE MINAS
  {
    id: "esc-ing-minas",
    name: "Escuela Profesional de Ingenieria de Minas",
    facultyId: "fac-minas",
  },

  // FACULTAD DE INGENIERIA QUIMICA
  {
    id: "esc-ing-quimica",
    name: "Escuela Profesional de Ingeniería Química",
    facultyId: "fac-quimica",
  },

  // FACULTAD DE CIENCIAS BIOLOGICAS
  {
    id: "esc-ciencias-biologicas",
    name: "Escuela Profesional de Ciencias Biológicas",
    facultyId: "fac-ciencias-biologicas",
  },
  {
    id: "esc-pesqueria",
    name: "Escuela Profesional de Ciencias Biológicas: Pesquería",
    facultyId: "fac-ciencias-biologicas",
  },
  {
    id: "esc-microbiologia",
    name: "Escuela Profesional de Ciencias Biológicas: Microbiología",
    facultyId: "fac-ciencias-biologicas",
  },

  // FACULTAD DE CIENCIAS DE LA SALUD
  {
    id: "esc-nutricion",
    name: "Escuela Profesional de Nutrición Humana",
    facultyId: "fac-ciencias-salud",
  },
  {
    id: "esc-odontologia",
    name: "Escuela Profesional de Odontología",
    facultyId: "fac-ciencias-salud",
  },

  // FACULTAD DE ENFERMERIA
  {
    id: "esc-enfermeria",
    name: "Escuela Profesional de Enfermería",
    facultyId: "fac-enfermeria",
  },

  // FACULTAD DE MEDICINA HUMANA
  {
    id: "esc-medicina-humana",
    name: "Escuela Profesional de Medicina Humana",
    facultyId: "fac-medicina-humana",
  },

  // FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA
  {
    id: "esc-medicina-veterinaria",
    name: "Escuela Profesional de Medicina Veterinaria y Zootecnia",
    facultyId: "fac-medicina-veterinaria",
  },

  // FACULTAD DE CIENCIAS CONTABLES Y ADMINISTRATIVAS
  {
    id: "esc-ciencias-contables",
    name: "Escuela Profesional de Ciencias Contables",
    facultyId: "fac-ciencias-contables",
  },

  // FACULTAD DE CIENCIAS DE LA EDUCACION
  {
    id: "esc-fisica",
    name: "Escuela Profesional de Física",
    facultyId: "fac-ciencias-educacion",
    website: "https://fisica.unap.edu.pe/",
  },
  {
    id: "esc-inicial",
    name: "Escuela Profesional de Inicial",
    facultyId: "fac-ciencias-educacion",
  },
  {
    id: "esc-primaria",
    name: "Escuela Profesional de Primaria",
    facultyId: "fac-ciencias-educacion",
  },
  {
    id: "esc-secundaria-sociales",
    name: "Escuela Profesional de Secundaria: Sociales",
    facultyId: "fac-ciencias-educacion",
    website: "https://secundariasociales.unap.edu.pe",
  },
  {
    id: "esc-secundaria-literatura",
    name: "Escuela Profesional de Secundaria: Literatura",
    facultyId: "fac-ciencias-educacion",
    website: "https://secundarialiteratura.unap.edu.pe",
  },
  {
    id: "esc-secundaria-matematica",
    name: "Escuela Profesional de Secundaria: Matemática",
    facultyId: "fac-ciencias-educacion",
    website: "https://secundariamatematica.unap.edu.pe",
  },

  // FACULTAD DE CIENCIAS JURIDICAS Y POLITICAS
  {
    id: "esc-derecho",
    name: "Escuela Profesional de Derecho",
    facultyId: "fac-ciencias-juridicas",
  },

  // FACULTAD DE CIENCIAS SOCIALES
  {
    id: "esc-antropologia",
    name: "Escuela Profesional de Antropología",
    facultyId: "fac-ciencias-sociales",
  },
  {
    id: "esc-arte",
    name: "Escuela Profesional de Arte",
    facultyId: "fac-ciencias-sociales",
  },
  {
    id: "esc-danza",
    name: "Danza (Arte)",
    facultyId: "fac-ciencias-sociales",
    website: "https://danza.unap.edu.pe",
  },
  {
    id: "esc-musica",
    name: "Música (Arte)",
    facultyId: "fac-ciencias-sociales",
    website: "https://musica.unap.edu.pe",
  },
  {
    id: "esc-teatro",
    name: "Teatro (Arte)",
    facultyId: "fac-ciencias-sociales",
    website: "https://teatro.unap.edu.pe",
  },
  {
    id: "esc-comunicacion",
    name: "Escuela Profesional de Ciencias de la Comunicación Social",
    facultyId: "fac-ciencias-sociales",
  },
  {
    id: "esc-sociologia",
    name: "Escuela Profesional de Sociología",
    facultyId: "fac-ciencias-sociales",
  },
  {
    id: "esc-turismo",
    name: "Escuela Profesional de Turismo",
    facultyId: "fac-ciencias-sociales",
  },

  // FACULTAD DE TRABAJO SOCIAL
  {
    id: "esc-trabajo-social",
    name: "Escuela Profesional de Trabajo Social",
    facultyId: "fac-trabajo-social",
  },

  // FACULTAD DE CIENCIAS ADMINISTRATIVAS Y HUMANAS
  {
    id: "esc-administracion",
    name: "Escuela Profesional de Administración",
    facultyId: "fac-ciencias-adm-humanas",
  },
];

const exampleStudents = [
  {
    id: "stu-001",
    code: "20250001",
    full_name: "Juan Pérez",
    email: "juan.perez@uni.edu.pe",
    number: "987654321",
    facultyId: "fac-ciencias-agrarias",
    faculty: "FACULTAD DE CIENCIAS AGRARIAS",
    schoolId: "esc-ing-agronomica",
    school: "Escuela Profesional de Ingeniería Agronómica",
    selectedDays: [1, 3], // Lunes y Miércoles
    createdAt: new Date().toISOString(),
  },
  {
    id: "stu-002",
    code: "20250002",
    full_name: "María López",
    email: "maria.lopez@uni.edu.pe",
    number: "912345678",
    facultyId: "fac-mecanica-electrica-electronica-sistemas",
    faculty:
      "FACULTAD DE INGENIERIA MECANICA ELECTRICA, ELECTRONICA Y SISTEMAS",
    schoolId: "esc-ing-sistemas",
    school: "Escuela Profesional de Ingeniería de Sistemas",
    selectedDays: [2, 4], // Martes y Jueves
    createdAt: new Date().toISOString(),
  },
  {
    id: "stu-003",
    code: "20250003",
    full_name: "Carlos Gómez",
    email: "carlos.gomez@uni.edu.pe",
    number: "923456789",
    facultyId: "fac-ciencias-salud",
    faculty: "FACULTAD DE CIENCIAS DE LA SALUD",
    schoolId: "esc-nutricion",
    school: "Escuela Profesional de Nutrición Humana",
    selectedDays: [1, 5], // Lunes y Viernes
    createdAt: new Date().toISOString(),
  },
];

async function seedFirestore() {
  try {
    // 1) Facultades (colección plana)
    for (const f of faculties) {
      const ref = doc(db, "faculties", f.id);
      const payload = { name: f.name };
      if (f.websites) payload.websites = f.websites;
      await setDoc(ref, payload);
      console.log("Facultad creada:", f.id);
    }

    // 2) Escuelas (colección plana) con facultyId
    for (const s of schools) {
      const ref = doc(db, "schools", s.id);
      const payload = { name: s.name, facultyId: s.facultyId };
      if (s.website) payload.website = s.website;
      await setDoc(ref, payload);
      console.log("Escuela creada:", s.id);
    }

    // 3) Students (duplica faculty & school names para denormalización)
    for (const st of exampleStudents) {
      const ref = doc(db, "students", st.id);
      await setDoc(ref, st);
      console.log("Student creado:", st.id);
    }

    console.log(
      "✅ Seed completado siguiendo modelo NoSQL (colecciones planas + denormalización)."
    );
  } catch (err) {
    console.error("Error en seedFirestore:", err);
  }
}

// seedFirestore();
