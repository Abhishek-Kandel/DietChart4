import React from "react";

const TableHeading = () => {
  const headings = [
    "Food",
    "Quantity(g)",
    "Carbs(g)",
    "Protein(g)",
    "Fat(g)",
    "Calories(kCal)",
    "Action",
  ];
  return (
    <tr>
      {headings.map((element, index) => {
        return <th key={index}>{element}</th>;
      })}
    </tr>
  );
};
export default TableHeading;
