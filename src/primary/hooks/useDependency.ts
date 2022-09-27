import { useContext } from "react";
import { DependencyContext } from "../context/DependencyProvider";

const useDependency = () => useContext(DependencyContext);

export default useDependency;
