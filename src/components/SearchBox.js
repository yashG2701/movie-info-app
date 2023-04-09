import React from "react";

const SearchBox = (props) => {
    return (
        <div className="mb-1 col-lg-2">
          <input className='form-control'
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
           placeholder='Type to search for movies ....'>
        
           </input>
        </div>
    );
};

export default SearchBox;