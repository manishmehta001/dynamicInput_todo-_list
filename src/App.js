import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [salary, setSalary] = useState("");
  const [extraFields, setExtraFields] = useState([]);
  const [extraInputs, setExtraInputs] = useState({});
  const [items, setItems] = useState([]);

  console.log("extraFields", extraFields);
  console.log("extraInput", extraInputs);

  const addExtraField = () => {
    if (extraFields.length < 5) {
      const newField = `extra fields${extraFields.length + 1}`;
      setExtraFields([...extraFields, newField]);
      setExtraInputs({ ...extraInputs, [newField]: "" });
    }
  };

  const removeExtraField = (field) => {
    console.log("field==>", field);
    const remainingFields = extraFields.filter((f) => f !== field);
    setExtraFields(remainingFields);
    const updatedInputs = { ...extraInputs };
    console.log("updatedInputs", updatedInputs);
    delete updatedInputs[field];
    setExtraInputs(updatedInputs);
  };

  const handleSubmit = () => {
    const newItem = {
      name,
      email,
      id,
      salary,
      extra: { ...extraInputs },
    };
    setItems([...items, newItem]);

    setName("");
    setEmail("");
    setId("");
    setSalary("");
    setExtraInputs(
      extraFields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
    );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Employee Form</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>

      {/* dynamic fields */}
      <div style={{ marginTop: "15px" }}>
        {extraFields.map((field, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <input
              type="text"
              placeholder={`Enter ${field}`}
              value={extraInputs[field]}
              onChange={(e) =>
                setExtraInputs({ ...extraInputs, [field]: e.target.value })
              }
              style={{ flex: 1, marginRight: "10px" }}
            />
            <button
              onClick={() => removeExtraField(field)}
              style={{ color: "red" }}
            >
              ➖
            </button>
          </div>
        ))}
      </div>

      {extraFields.length < 5 && (
        <button
          onClick={addExtraField}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          ➕ Add Extra Field
        </button>
      )}

      <br />
      <button onClick={handleSubmit}>Submit</button>

      <table
        border="1"
        style={{ marginTop: "20px", width: "100%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Salary</th>
            {extraFields.map((field, index) => (
              <th key={index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.id}</td>
              <td>{item.salary}</td>
              {extraFields.map((field, index) => (
                <td key={index}>{item.extra[field] || "N/A"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
