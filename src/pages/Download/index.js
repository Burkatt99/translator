import React from "react";
import './style.css';
import ExcelToJson from "../../components/excel_data";

function AddData() {
  return (
    <div className="postBlock">
      <ExcelToJson />
    </div>
  );
}

export default AddData;
