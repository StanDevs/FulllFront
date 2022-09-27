import React, { ReactNode, useCallback, useState } from "react";

type TEditContext = { isEdit: boolean; toggleEditMode: () => void };

export const EditContext = React.createContext<TEditContext>({
  isEdit: false,
  toggleEditMode: () => {},
});

const EditProvider = ({ children }: { children: ReactNode }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setIsEdit((prev) => !prev);
  }, [isEdit]);

  return (
    <EditContext.Provider value={{ isEdit, toggleEditMode: handleToggle }}>
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;
