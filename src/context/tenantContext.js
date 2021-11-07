import React, { useReducer, useState ,useEffect} from "react";
import axios from 'axios';


export const tenantsContext = React.createContext();

const INIT_STATE = {
    tenants: [],
    tenantToEdit: null,
    streets: [
        {
            "id": 1,
            "prefix": {
                "id": 1,
                "Name": "test",
                "ShortName": "test"
            },
            "Name": "test",
            "CityId": 0,
            "City": "string",
            "NameWithPrefix": "string"
        }
    ],
    houses: [],
    apartments: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, tenants: action.payload };
        case "GET_STREETS":
            return { ...state, streets: action.payload };
        case "GET_HOUSES":
            return { ...state, houses: action.payload };
        case "GET_APARTMENT":
            return { ...state, apartments: action.payload };
        case "EDIT_TENANTS":
            return { ...state, tenantToEdit: action.payload };

        default: return state
    }
}

const TenantContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const [addressId, setAddress] = useState("")
    useEffect(() => {
        getData()
        
    }, [addressId])

    const getData = async () => {
       
        let { data } = await axios(`https://dispex.org/api/vtest/HousingStock/clients?addressId=${addressId}`)
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

    const getHouses = async (e) => {
        const streetId = e.target.value;
        let { data } = await axios(`https://dispex.org/api/vtest/Request/houses/${streetId}`)
        dispatch({
            type: "GET_HOUSES",
            payload: data,
        })
    }

    const getApartment = async (e) => {
        const houseId = e.target.value;
        let { data } = await axios(`https://dispex.org/api/vtest/Request/house_flats/${houseId}`)
        dispatch({
            type: "GET_APARTMENT",
            payload: data,
        })
    }

    const onChangeApatment = (e) => {
        debugger;
        setAddress(e.target.value);

    }

    const addTenants = async (newTenant) => {
        if (!addressId) {
            alert("Выберите квартиру чтобы добавить жильца")
            return
        }

        const response = await axios.post("https://dispex.org/api/vtest/HousingStock/client", newTenant)

        if (response.data.result === "Ok") {
            const responseBindClient = await axios.put("https://dispex.org/api/vtest/HousingStock/bind_client", {
                "AddressId": addressId,
                "ClientId": response.data.id
            })
        }

        else {
            alert("не получилось привязать жильца")
            return
        }
        getData()
    }



    return (
        <tenantsContext.Provider value={{
            tenants: state.tenants ?? [],
            tenantToEdit: state.tenantToEdit,
            streets: state.streets ?? [],
            houses: state.houses,
            apartments: state.apartments,
            getData,
            getStreets,
            getHouses,
            getApartment,
            addTenants,
            onChangeApatment

        }}>
            {children}
        </tenantsContext.Provider>
    )
}

export default TenantContextProvider;