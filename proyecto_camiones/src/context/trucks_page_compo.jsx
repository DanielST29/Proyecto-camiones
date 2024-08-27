import { useState } from "react";
import { TruckPageContext } from "./trucks_page_context";

export const TruckPageComponent = ( {children} ) => {

    const [truckSelectedPage, setTruckSelectedPage] = useState('')

    const handleTruckSelectedPage = (aTruckId) => {
        setTruckSelectedPage(() => aTruckId)
    }

    return (
        <TruckPageContext.Provider
            value={{
                truckSelectedPage,
                handleTruckSelectedPage
            }}
        >
            { children }
        </TruckPageContext.Provider>
    )
}