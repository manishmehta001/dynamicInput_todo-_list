import React, { useState } from "react";

const EmployeeList = ({ employeeList, extraFields, setEmployeeList }) => {
  const [editIdx, setEditIdx] = useState(null);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isExtraField, setIsExtraField] = useState(false);

  const handleDoubleClick = (index, field, value, isExtra = false) => {
    setEditIdx(index);
    setEditField(field);
    setEditValue(value);
    setIsExtraField(isExtra);
  };

  const handleEdit = () => {
    if (editIdx !== null && editField) {
      const updatedList = [...employeeList];

      if (isExtraField) {
        if (!updatedList[editIdx].extra) {
          updatedList[editIdx].extra = {};
        }
        updatedList[editIdx].extra[editField] = editValue;
      } else {
        updatedList[editIdx][editField] = editValue;
      }

      setEmployeeList(updatedList);
    }

    setEditIdx(null);
    setEditField(null);
    setIsExtraField(false);
  };
  return (
    <div>
      {employeeList.length > 0 && (
        <table
          border="1"
          style={{
            marginTop: "20px",
            width: "100%",
            textAlign: "center",
            // borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
              }}
            >
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Age</th>
              {extraFields?.map((field, index) => (
                <th key={index}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employeeList?.map((item, index) => (
              <tr key={index}>
                {["name", "email", "id", "age"].map((field) => (
                  <td
                    key={field}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff", // Alternate row background color
                      cursor: "pointer", // Row pe hover karne pe pointer cursor milega
                    }}
                    onDoubleClick={() =>
                      handleDoubleClick(index, field, item[field])
                    }
                  >
                    {editIdx === index && editField === field ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleEdit}
                        autoFocus
                      />
                    ) : (
                      item[field]
                    )}
                  </td>
                ))}
                {extraFields.map((field, idx) => (
                  <td
                    key={idx}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                      cursor: "pointer",
                    }}
                    onDoubleClick={() =>
                      handleDoubleClick(
                        index,
                        field,
                        item.extra?.[field] || "",
                        true
                      )
                    }
                  >
                    {editIdx === index && editField === field ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleEdit}
                        autoFocus
                      />
                    ) : (
                      item.extra?.[field] || "N/A"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
