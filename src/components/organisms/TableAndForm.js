import React, { useState, useEffect } from "react";
//import Form from "./Form";
import SidePanel from "./sidePanel/SidePanel";
import Table from "./table/Table";

function TableAndForm() {
  const [tableData, setTableData] = useState(() => {
    const storedData = localStorage.getItem("tableData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [formData, setFormData] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editClicked, setEditClicked] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setFormData({});
    setShowForm(false);
  };
  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
  }, [tableData]);

  function handleFormSubmit(formData) {
    const newData =
      editingIndex !== -1
        ? tableData.map((item, index) =>
            index === editingIndex ? formData : item
          )
        : [...tableData, formData];
    setTableData(newData);
    setFormData({});
    setEditingIndex(-1);
  }

  function handleRowDelete(index) {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  }

  function handleRowEdit(index) {
    const formData = tableData[index];
    setFormData(formData);
    setEditingIndex(index);
    setEditClicked(true);
    setShowForm(true);
  }

  return (
    <div className="table-and-form">
      <div className="form-panel">
        <SidePanel
          onSubmit={handleFormSubmit}
          data={formData}
          editClicked={editClicked}
          setEditClicked={setEditClicked}
          showForm={showForm}
          setShowForm={setShowForm}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      </div>
      <div className="table">
        <Table
          data={tableData}
          onDelete={handleRowDelete}
          onEdit={handleRowEdit}
        />
      </div>
    </div>
  );
}

export default TableAndForm;
