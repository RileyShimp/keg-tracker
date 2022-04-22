import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  let sellPint = () => {

    (props.pints > 0) ? pints -1 : pints = 0;
  }
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p><em>$ {props.price}</em></p>
        <p>Alcohol Content: {props.alcohol}% </p>
        <p>Pints left in keg: {props.pints}</p>
        <hr/>
      </div>
      <button onClick={sellPint}>Sell Pint</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcohol: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};


export default Keg;