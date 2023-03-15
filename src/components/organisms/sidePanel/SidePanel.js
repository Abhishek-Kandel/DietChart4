import Button from "../../atoms/Button";
import Form from "../form/Form";
import "./sidePanel.css";

function SidePanel({
  onSubmit,
  data,
  editClicked,
  setEditClicked,
  showForm,
  handleClick,
  handleClose,
}) {
  return (
    <div>
      <Button  text="Add Food" view="add-food-button" onClick={handleClick} />
      {showForm && (
        <div className="side-panel-overlay">
          <div className="side-panel">
            <div className="side-panel-close">
              <button onClick={handleClose} className="side-panel-close-button">
                &times;
              </button>
            </div>
            <Form
              onSubmit={onSubmit}
              data={data}
              editClicked={editClicked}
              setEditClicked={setEditClicked}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SidePanel;
