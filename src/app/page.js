import Image from "next/image";
import "@/firebase/seed";
import facultiesService from "@/firebase/faculties";
import schoolsService from "@/firebase/schools";
export default async function Home() {
  const faculties = await facultiesService.getFaculties();
  return (
    <div className="">
      <h1>Faculties</h1>
      <select>
        {faculties.map((faculty) => (
          <option key={faculty.id} value={faculty.id}>
            {faculty.name}
          </option>
        ))}
      </select>
      <h1>Schools</h1>
      <select>
        {schoolsService.getSchools().then((schools) =>
          schools.map((school) => (
            <option key={school.id} value={school.id}>
              {school.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
