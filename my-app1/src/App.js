import React from 'react';  
import ReactDOM from 'react-dom/client';  
import FetchAPI from "./Components/API/FetchApi";
function App()
{
    return(<div><FetchAPI/></div>);
}
//export default App;
ReactDOM.render(<App/>,document.getElementById('root'));

