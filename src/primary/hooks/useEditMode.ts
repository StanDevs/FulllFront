import { useContext } from "react";
import { EditContext } from "../context/EditProvider";

const useEditMode = () => useContext(EditContext);

export default useEditMode;
