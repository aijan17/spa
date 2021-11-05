import  React ,{ useContext, useEffect } from 'react';
import {tenantsContext} from "../../context/tenantContext";


const StreetList = () => {
    const {streets, getStreets} = useContext(tenantsContext)

    useEffect(() => {
      getStreets()
    }, [])

    console.log("street",streets)

    return (
        <div>
            {
                streets.map(street => (
                    <span key={street.id}>{street.name}</span>
                ))
            }
            
        </div>
    );
};

export default StreetList;