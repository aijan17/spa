import React, { useReducer } from "react";
import axios from 'axios';


export const tenantsContext = React.createContext();

const INIT_STATE = {
    tenants: [
        {
            "name":"Igor"
        }
    ],
    tenantToEdit: null,
    streets: [
        {
            "Id": 1,
            "Prefix": {
                "Id": 1,
                "Name": "test",
                "ShortName": "test"
            },
            "Name": "test",
            "CityId": 0,
            "City": "string",
            "NameWithPrefix": "string"
        }
    ]
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, tenants: action.payload };
        case "GET_STREETS":
            return { ...state, streets: action.payload };
        case "EDIT_TENANTS":
            return { ...state, tenantToEdit: action.payload };
        default: return state
    }
}

const TenantContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getData = async () => {
        let { data } = await axios('https://dispex.org/api/vtest/HousingStock/clients')
        dispatch({
            type: "GET_DATA",
            payload: data,
        })
    }

    const getStreets = async () => {
        let { data } = await axios("https://dispex.org/api/vtest/Request/streets")
        dispatch({
            type: "GET_STREETS",
            payload: data,
        })
    }

    return (
        <tenantsContext.Provider value={{
            tenants: state.tenants ?? [],
            tenantToEdit: state.tenantToEdit,
            streets: state.streets ?? [],
            getData,
            getStreets

        }}>
            {children}
        </tenantsContext.Provider>
    )
}

export default TenantContextProvider;