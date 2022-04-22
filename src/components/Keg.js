import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p><em>$ {props.price}</em></p>
        <p>Alcohol Content: {props.alcohol}% </p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcohol: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};


export default Keg;