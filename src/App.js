import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import Header from "./components/Header";
import ExtraFields from "./components/ExtraFields";
import EmployeeList from "./components/EmployeeList";
import ProjectSummary from "./components/ProjectSummary";

export default function App() {
  const [showSummary, setShowSummary] = useState(false);

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    id: "",
    age: "",
  });
  const [employeeList, setEmployeeList] = useState([]);
  const [extraInputs, setExtraInputs] = useState({});
  const [extraFields, setExtraFields] = useState([]);
  const [error, setError] = useState({});

  const validateForm = () => {
    const newError = {};
    const { name, email, id, age } = employee;

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.trim()) newError.name = "Name is required!";
    if (!nameRegex.test(name))
      newError.name = "Name should contain only letters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newError.email = "Email is required!";
    if (!emailRegex.test(email)) newError.email = "Invalid email format";

    const number = /^\d+$/;
    if (!id.trim()) newError.id = "ID is required";
    if (!number.test(id)) newError.id = "ID must be a number";
    if (employeeList.some((emp) => Number(emp.id) === Number(id)))
      newError.id = "ID must be unique";

    if (!age.trim()) newError.age = "age is required";
    if (!number.test(id)) newError.age = "age must be a number";

    return newError;
  };

  const handleSubmit = () => {
    const newError = validateForm();
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    const newItem = {
      ...employee,
      extra: { ...extraInputs },
    };

    setEmployeeList([...employeeList, newItem]);
    setEmployee({ name: "", id: "", email: "", age: "" });
    setError({});
    setExtraInputs(
      extraFields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
    );
  };

  console.log("employee", employee);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <Header />
      <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        error={error}
      />
      <ExtraFields
        extraFields={extraFields}
        setExtraFields={setExtraFields}
        extraInputs={extraInputs}
        setExtraInputs={setExtraInputs}
      />
      <br />
      <button style={{ cursor: "pointer" }} onClick={handleSubmit}>
        Submit
      </button>
      <EmployeeList
        employeeList={employeeList}
        extraFields={extraFields}
        setEmployeeList={setEmployeeList}
      />
      {employeeList.length === 0 && (
        <button
          onClick={toggleSummary}
          style={{ cursor: "pointer", marginTop: "8px", marginBottom: "8px" }}
        >
          {showSummary ? "Hide Summary" : "Show Summary"}
        </button>
      )}

      {showSummary && <ProjectSummary />}
    </div>
  );
}
