import React from 'react';
import "./style.css"

const App = () => {
    const [state,setState]= React.useState(2)
    return ( <div>
        <nav className='tyger'><h2>tyger</h2></nav>
        <h3>state:{state}</h3>
        
    </div>
         );
}
 
export default App;