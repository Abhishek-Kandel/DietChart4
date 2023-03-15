import React from "react";
import Button from "./Button";
function TableRow({ onEdit, onDelete, item, index }) {
  return (
    <tr key={index}>
      <td>{item.food}</td>
      <td>{item.quantity}</td>
      <td>{item.carbs}</td>
      <td>{item.protein}</td>
      <td>{item.fat}</td>
      <td>{item.totalCalories}</td>
      <td>
        <Button view="edit-button" onClick={() => onEdit(index)} text="Edit" />
        <Button
          view="delete-button"
          onClick={() => onDelete(index)}
          text="Delete"
        />
      </td>
    </tr>
  );
}

export default TableRow;
