import React, { createContext, useState } from 'react'

export const FiltersContext = createContext();

export function FiltersProvider({children}){

    const [filters, setFilters] = useState({
        ubicacion: "",
        autos: null,
        banos: null,
        habitacion: null,
        escaleras: null,
        metros: null,
        tipo: "VENTA",
        pInicial: null,
        pFinal: null
    });

    const handleFilters = (field, e) => {
        setFilters(prevState => [{...prevState, field: e}])
    }

    return(
        <FiltersContext.Provider value={{
            filters,
            handleFilters
        }}>{children}</FiltersContext.Provider>
    );
}