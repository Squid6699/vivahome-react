import React, { createContext, useState } from 'react'

export const FiltersContext = createContext();

export function FiltersProvider({children}){

    const INITIAL_FILTERS = {
        ubicacion: "",
        autos: null,
        banos: null,
        habitacion: null,
        escaleras: null,
        metros: null,
        tipo: "",
        pInicial: null,
        pFinal: null
    }

    const [filters, setFilters] = useState(INITIAL_FILTERS);

    const handleFilters = (f) => {
        setFilters(f);
    }

    const removeFilters = () => {
        setFilters(INITIAL_FILTERS);
    }

    return(
        <FiltersContext.Provider value={{
            filters,
            handleFilters,
            removeFilters
        }}>{children}</FiltersContext.Provider>
    );
}