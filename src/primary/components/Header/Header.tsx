import useEditMode from "../../hooks/useEditMode";
import "./header.css";

const Header = () => {
  const { isEdit, toggleEditMode } = useEditMode();
  return (
    <div className="header">
      <span>Github profiles</span>
      <button onClick={toggleEditMode}>Edit {isEdit ? "(On)" : "(Off)"}</button>
    </div>
  );
};

export default Header;
