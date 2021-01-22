import React from 'react';
import './PopupCard.css';

function PopupCard({type,qty,pay,balance,actionType}) {
    return (
        <div className="popup_card col-lg-6">
            <div className="card_header">
                <h1>Top 5 {type} DAPPS</h1>
                <h3>Buy {qty || 10} SETS</h3>
                <h3>Pay {pay || 100} USDC </h3>
                <h3>Balance {balance || 1000} USDC</h3>

            </div>

            <div className="card_body">
            <form>
 
  
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-6 pt-0 content_left">FlashLoan Leverage</legend>
      <div className="col-sm-6 content_right">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label className="form-check-label" for="gridRadios1">
            No Leverage
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label className="form-check-label" for="gridRadios2">
            2X
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option2" />
          <label className="form-check-label" for="gridRadios3">
            5X
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option2" />
          <label className="form-check-label" for="gridRadios4">
            10X
          </label>
        </div>
       
      </div>
    </div>
  </fieldset>
  <div className="form-group row">
    <div className="col-sm-6 content_left">Deposit Tokens On AAVE</div>
    <div className="col-sm-6 content_right">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" for="gridCheck1">
          YES
        </label>
      </div>
    </div>
  </div>
  <div className="row">
      <legend className="col-form-label col-sm-6 pt-0 content_left">Weight Choice (20%)</legend>
      <div className="col-sm-6 content_right">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="weights" id="weight1" value="weight1" checked />
          <label className="form-check-label radio-inline control-label" for="weight1">
             Equally weighted
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="weights" id="weight2" value="weight2" />
          <label className="form-check-label radio-inline control-label" for="weight2">
            By Circulating Supply
          </label>
        </div>
        
      </div>
    </div>
  <div className="form-group row">
    <div className="col-sm-6 submit_action">
      <button type="submit" className="btn btn-primary">Submit {actionType || 'BUY'}</button>
    </div>
  </div>
</form>

            </div>

            {/* <!-- Button trigger modal --> */}

           

          
        </div>
    )
}

export default PopupCard
