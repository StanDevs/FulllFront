import dependencies, { IDependencies } from "../../dependency";
import React, { ReactNode } from "react"

const dependencyRef = dependencies()

export const DependencyContext = React.createContext<IDependencies>(dependencyRef)

const DependencyProvider = ({children}: {children: ReactNode}) => {
    return <DependencyContext.Provider value={dependencyRef}>{children}</DependencyContext.Provider>
}

export default DependencyProvider;