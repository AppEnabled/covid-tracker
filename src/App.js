import { FormControl ,Select, MenuItem} from '@mui/material';
import React, { useState }  from 'react';
import './App.css';

function App() {
  const [countries,setCountries] = useState([
    'USA','UK','INDIA'
  ]);
  return (
    <div className="app">
   
    
    <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
            <FormControl className="app__dropdown">
              <Select 
                  variant="outlined"
                  value="abc"
              >
                {/* Loop through all countries and show drop down*/}
                {
                    countries.map((country) =>(
                        <MenuItem value={country}>{country}</MenuItem>  
                    ))
                }
                {/*<MenuItem value="worldwide">1</MenuItem>
                <MenuItem value="worldwide">2</MenuItem>*/}
              </Select>

            </FormControl>`

    </div>


      
      {/* Header */}
      {/* Tittle */}

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/*Table*/}
      {/*Graph*/}

      {/* map */}

    </div>
  );
}

export default App;
