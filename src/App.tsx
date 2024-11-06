import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard.tsx";
import "./App.css";

const sampleEmployee = {
  name: {
    first: "Mello",
    last: "Mellie",
  },
  email: "mello.mellie@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/women/76.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    // Send the request
    fetch("http://localhost:8080/api/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data.results[0]);
      });
  };

  return (
    <>
      <div className="App">
        <EmployeeCard employee={employee} />
        <button type="button" onClick={getEmployee}>
          Get employee
        </button>
      </div>
    </>
  );
}

export default App;
