import  React ,{ useContext, useEffect } from 'react';
import {tenantsContext} from "../../context/tenantContext";
// import { Dropdown} from 'rsuite';
import "rsuite/dist/rsuite.min.css";

const StreetList = () => {
    const {streets, houses,apartments, getStreets, getHouses,getApartment, onChangeApatment} = useContext(tenantsContext)

    useEffect(() => {
      getStreets()
    }, [])

    console.log("aprt",apartments)
    return (
        <div className="form_address">
            <select  className="form__selects" name="street" id="street" onChange={getHouses}>
            <option value="" hidden>Улица</option>

                {
                    streets.map(street =>(
                        <option key={street.id} value={street.id} multiple>{street.nameWithPrefix}</option> 
                    ))
                }
            </select>
            <select className="form__selects"  id="houses" onChange={getApartment}>
                <option value="" hidden>Дом</option>
                {
                    houses.map(house =>(
                        <option key={house.id} value={house.id} multiple>{house.name}</option> 
                    ))
                }
            </select>     
            <select className="form__selects" name="apartment" id="apartment" onChange={onChangeApatment} >
                <option value="" hidden>Кв/Офис</option>
                {
                    apartments.map(apartment =>(
                        <option key={apartment.id} value={apartment.id} multiple>{apartment.name}</option> 
                    ))
                }
            </select>        
        </div>
    );
};

export default StreetList;