import React from 'react';
import List from "../listTenants/List"
import StreetList from '../streets/StreetList';


const index = () => {
    return (
        <div>
            <div id="navbar">
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                    <li><a href="#">Link 5</a></li>
                </ul>
            </div>
            <StreetList />
            <br/>
            <List />

        </div>
    );
};

export default index;