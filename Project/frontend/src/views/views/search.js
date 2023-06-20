import React from "react";

import './admin-dashboard.css'

const Search = ({value, onChange}) => {
    return(
        <div>
         <img
          src="/playground_assets/icons8search2413140-60dg-200h.png"
          alt="icons8search2413140"
          className="admin-dashboard-icons8search241"
         />
       <input type="text" className="admin-dashboard-rectangle6"
                   name="search" placeholder='search by name or designation' 
                   value={value} onChange={onChange}
                   style={{textAlign:'center'}}/>
        </div>
    )
}

export default Search