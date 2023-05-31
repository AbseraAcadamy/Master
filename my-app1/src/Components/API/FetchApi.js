import React from 'react';
function FetchAPI(){
    const apiGet=()=>{
        fetch('https://api.agify.io?name=bella')
  .then(response => response.json())
  .then(data => console.log(data));
    }
    return(
        <div>
            My API<br/>
            <button onClick={apiGet}>FetchAPI</button>
        </div>
    )
}
export default FetchAPI;