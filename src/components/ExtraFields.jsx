import React from "react";

const ExtraFields = ({
  extraFields,
  setExtraFields,
  extraInputs,
  setExtraInputs,
}) => {
  const addExtraField = () => {
    if (extraFields.length < 5) {
      const newField = `extra fields${extraFields.length + 1}`;
      setExtraFields([...extraFields, newField]);
      setExtraInputs({ ...extraInputs, [newField]: "" });
    }
  };

  const removeExtraField = (field) => {
    const remainingFields = extraFields.filter((f) => f !== field);
    setExtraFields(remainingFields);
    const updatedInputs = { ...extraInputs };
    delete updatedInputs[field];
    setExtraInputs(updatedInputs);
  };

  return (
    <>
      <div style={{ marginTop: "15px" }}>
        {extraFields?.map((field, index) => (
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
              value={extraInputs?.[field]}
              onChange={(e) =>
                setExtraInputs({ ...extraInputs, [field]: e.target.value })
              }
              style={{ flex: 1, marginRight: "10px" }}
            />
            <button
              onClick={() => removeExtraField(field)}
              style={{ color: "red", cursor: "pointer" }}
            >
              ➖
            </button>
          </div>
        ))}
      </div>
      {extraFields.length < 5 && (
        <button
          onClick={addExtraField}
          style={{ marginTop: "10px", marginBottom: "10px", cursor: "pointer" }}
        >
          ➕ Add Extra Field
        </button>
      )}
    </>
  );
};

export default ExtraFields;
