import './App.css';
import Dashboard from './Page/Dashboard';
/* import { useState } from 'react'; */
function App() {
    /* ......................Practice Area  START .......................................... */

/* 
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);

  const handleFirstNameCheckboxChange = () => {
    setShowFirstName(!showFirstName);
  };

  const handleLastNameCheckboxChange = () => {
    setShowLastName(!showLastName);
  }; */

 /* ......................Practice Area  END .......................................... */

  return (
    <div>
{/* ......................Practice Area  START ..........................................  */}
{/* 
<div>
      <label>
        <input type="checkbox" checked={showFirstName} onChange={handleFirstNameCheckboxChange} />
        Show First Name
      </label>
      {showFirstName && (
        <div>
          <label>
            First Name:
            <input type="text" />
          </label>
        </div>
      )}

      <label>
        <input type="checkbox" checked={showLastName} onChange={handleLastNameCheckboxChange} />
        Show Last Name
      </label>
      {showLastName && (
        <div>
          <label>
            Last Name:
            <input type="text" />
          </label>
        </div>
      )}
    </div> */}

    {/* ......................Practice Area  END ..........................................  */}
      <Dashboard />
    </div>
  );
}

export default App;
