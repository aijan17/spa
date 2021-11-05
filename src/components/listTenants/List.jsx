import React from 'react';
import { useContext, useEffect } from 'react';
import {tenantsContext} from "../../context/tenantContext";


const List = () => {
    const {tenants,getData} = useContext(tenantsContext)

    useEffect(() =>{
        getData()
    },[])
    console.log("tenant",tenants)

      return(
          <ul>
              {/* {
                tenants.map(tenant => (
                    <span key={tenant.id}>{tenant.Name}</span>
                ))
            } */}
          </ul>
      )
  }


export default List;