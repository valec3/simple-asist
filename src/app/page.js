import Image from "next/image";
import "@/firebase/seed";
import facultiesService from "@/firebase/faculties";
import schoolsService from "@/firebase/schools";
import Login from "@/features/auth/Login";
export default async function Home() {
  const faculties = await facultiesService.getFaculties();
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center login-page">
      <Login />
    </div>
  );
}
