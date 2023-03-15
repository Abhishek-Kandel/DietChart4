import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import InputField from "../../molecules/InputField";
import "./form.css";

function Form({ onSubmit, data, editClicked, setEditClicked }) {
  const [formData, setFormData] = useState(data);
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
    setFormChanged(false);
    setEditClicked(false);
  }

  useEffect(() => {
    const isFormChanged =
      formData.food !== data.food ||
      formData.quantity !== data.quantity ||
      formData.carbs !== data.carbs ||
      formData.protein !== data.protein ||
      formData.fat !== data.fat ||
      formData.totalCalories !== data.totalCalories;
    setFormChanged(isFormChanged);
  }, [formData, data]);

  return (
    <form className='form' onSubmit={handleSubmit}>
      <InputField
        text={"Food"}
        name="food"
        type="text"
        value={formData.food || ""}
        onChange={handleChange}
      />

<InputField
        text={"Quantity"}
        name="quantity"
        type="number"
        value={formData.quantity || ""}
        onChange={handleChange}
      />
     

     <InputField
        text={"Carbs"}
        name="carbs"
        type="number"
        value={formData.carbs || ""}
        onChange={handleChange}
      />
      
      <InputField
        text={"Protein"}
        name="protein"
        type="number"
        value={formData.protein || ""}
        onChange={handleChange}
      />
      <InputField
        text={"Fat"}
        name="fat"
        type="number"
        value={formData.fat || ""}
        onChange={handleChange}
      />
      <InputField
        text={"Total Calories"}
        name="totalCalories"
        type="number"
        value={formData.totalCalories || ""}
        onChange={handleChange}
      />
      
      <Button
        type="submit"
        disabled={!formChanged}
        text={editClicked ? "Update" : "Submit"}
        view={editClicked ? "update-button" : "submit-button"}
      />
    </form>
  );
}

export default Form;
