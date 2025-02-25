import React from "react";

const ProjectSummary = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Project Overview</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Dynamic Table:</strong> Employee list ko dynamically display
          kiya gaya hai jisme data ko edit kiya ja sakta hai.
        </li>
        <li style={styles.listItem}>
          <strong>Validation:</strong> Fields ko validate kiya gaya hai, jaise
          ki email aur required fields ke liye validation.
        </li>
        <li style={styles.listItem}>
          <strong>Double Click Editing:</strong> Table ke rows ko double-click
          karke unke fields ko edit kiya ja sakta hai.
        </li>
        <li style={styles.listItem}>
          <strong>Extra Fields:</strong> Table me additional dynamic fields ko
          manage kiya gaya hai, jisme extra fields ko handle kiya gaya hai aur
          editable banaya gaya hai.
        </li>
        {/* <li style={styles.listItem}>
          <strong>Responsive Design:</strong> Table ko responsive banaya gaya
          hai taaki mobile aur desktop dono platforms pe achha dikhe.
        </li> */}
        <li style={styles.listItem}>
          <strong>Interactive Feedback:</strong> User ko edit karte waqt
          real-time feedback dikhaya jata hai.
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    marginTop: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    padding: "10px",
    backgroundColor: "#f2f2f2",
    margin: "5px 0",
    borderRadius: "4px",
  },
};

export default ProjectSummary;
