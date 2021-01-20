import React from 'react';
import './SimpleViewCard.css';

function SimpleViewCard({title,description,value,gain}) {
    return (
        <div className="simpleView_card jumbotron">
            <h3>{title}</h3>
            <p>{description}</p>

            <form>
  <div className="form-group row">
    <label for="assetValue" className="col-sm-2 col-form-label">Value</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="assetValue" placeholder="Asset Value" />
    </div>
  </div>
  <div className="form-group row">
    <label for="assetGain" className="col-sm-2 col-form-label">Gain</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="assetGain" placeholder="assetGain" />
    </div>
  </div>
</ form>
{/* 
enter chart here */}


            
        </div>
    )
}

export default SimpleViewCard
