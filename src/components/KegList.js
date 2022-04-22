import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked = { props.onKegSelection }
          handleDecrementPint = { props.handleDecrementPint }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcohol={keg.alcohol}
          pints={keg.pints}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  handleDecrementPint: PropTypes.func
};

export default KegList