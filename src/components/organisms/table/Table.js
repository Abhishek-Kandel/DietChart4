import TableHeading from "../../atoms/TableHeading";
import TableRow from "../../atoms/TableRow";
import "./table.css";

function Table({ data, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <TableHeading />
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}
            onDelete={onDelete}
            onEdit={onEdit}
            item={item}
            index={index}
           
          />
        ))}
      </tbody>
    </table>
  );
}
export default Table;
