import React from 'react';
import './LocationSelector.css';

const LocationSelector = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Select Your Location
      </label>
      <select value={props.selectedLocation} onChange={props.handleChange}>
        <option defaultValue> -- Select a location -- </option>
        {props.locationData.map(location => <option key= {location.id} value={location.id}>{location.name}</option>)}
      </select>
      <button disabled={!props.selectedLocation}>Get Weather</button>
    </form>
  );
}

export default LocationSelector;