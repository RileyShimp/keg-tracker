import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg names={keg.names}
          location={keg.location}
          issue={keg.issue}
          key={index}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList