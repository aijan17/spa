import React from 'react';
import AddTenants from '../listTenants/AddTenants';
import List from "../listTenants/List"
import StreetList from '../streets/StreetList';


const index = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} className="container">
            <StreetList />
            <AddTenants/>
            <List />

        </div>
    );
};

export default index;