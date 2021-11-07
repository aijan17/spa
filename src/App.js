
import { Fragment } from 'react';
import './App.css';
import TenantContextProvider from "./context/tenantContext";
import Routes from './Routes';


function App() {
  return (
    <>
      <div className="App">
        <TenantContextProvider>
            <Routes />
        </TenantContextProvider>        
      </div>
    </>
  );

}

export default App;
