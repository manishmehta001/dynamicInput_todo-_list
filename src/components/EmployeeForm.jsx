import React from "react";

const EmployeeForm = ({ employee, setEmployee, error }) => {
  return (
    <div>
      {Object.entries(employee).map(([key, value], index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: error[key] ? "10px" : "5px",
          }}
          key={index}
        >
          <input
            type="text"
            placeholder={`Enter your ${key}`}
            value={value}
            onChange={(e) =>
              setEmployee((value) => ({ ...value, [key]: e.target.value }))
            }
          />
          {error[key] && (
            <span style={{ color: "red", fontSize: "14px" }}>{error[key]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeForm;
