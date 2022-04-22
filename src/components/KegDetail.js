import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.brand} - {keg.name}</h3>
      <p><em>{keg.price}</em></p>
      <p>Alcohol Content: {keg.alcohol}</p>
      <p>Pints left in keg: {keg.pints}</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
