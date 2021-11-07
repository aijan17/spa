import React from 'react';
import { useContext } from 'react';
import {tenantsContext} from "../../context/tenantContext";


const List = () => {
    const {tenants,getData} = useContext(tenantsContext)

    console.log("tenant",tenants)

      return(
          <>
          <div style={{marginTop:"100px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",}}>
                
                {
                    tenants.map(tenant =>(
                        <div >
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-4">
                                    <img src="https://i.imgur.com/jNNT4LE.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-8">
                                    <div class="card-body">
                                        <h5 className="card-title">{tenant.name}</h5>
                                        <p className="card-text">{tenant.email}</p>
                                        <p className="card-text" style={{color:"green"}}>{tenant.phone}</p>
                                    </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row" style={{textAlign:"center",paddingBottom:"15px"}}>
                                <div className="col-md-6">edit</div>
                                <div className="col-md-6">remove</div>
                                </div>
                                
                            </div>
                        </div>

                    ))
                }
          </div>
               
          </>
      )
  }


export default List;