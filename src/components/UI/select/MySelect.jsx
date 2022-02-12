import React from 'react';

const MySelect = ({options=[], defValue, value, onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option value='' disabled>{defValue}</option>
            {options.map( option =>
                <option key={option.value} value={option.value}>{option.title}</option>
            )}
        </select>
    );
};

export default MySelect;
