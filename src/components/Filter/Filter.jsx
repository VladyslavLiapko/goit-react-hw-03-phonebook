import React from "react";
import PropTypes from "prop-types";

export default function Filter ({ value, onChangeFilter }) {
    
    return (
        <div>
            <label>Find contacts by name: </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChangeFilter(e.target.value)}
            />
        </div>
    );
};


Filter.propTypes = {
  value: PropTypes.any,
  onchangeFilter: PropTypes.func.isRequired,
};
