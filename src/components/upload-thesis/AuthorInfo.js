import React, { Component } from 'react'
import "../../styles/author.css";
import InputFormField from "../../common/InputFormField";

export default class AuthorInfo extends Component {
  render() {
    return (
      <div className="author">
          <form>
              <div className="side-by-side">
              <InputFormField label="First Name" name="firstName" value="John" />
              <InputFormField label="Middle Name" name="middleName" value="Smith" />
              <InputFormField label="Last name" name="lastName" value="Doe" />
              </div>

              <div className="side-by-side">
              <InputFormField label="Permanent Address" name="stateNo" value="State No"  />
              <InputFormField name="district" value="District" />
              <InputFormField name="municipility" value="Municipality/VDC" />
              </div>

              <div className="side-by-side">
              <InputFormField name="wardNo" value="Ward No" />
              <InputFormField name="tole" value="Tole" />
              <InputFormField name="houseNo" value="House NO" />
              </div>

              <div className="side-by-side">
              <InputFormField label="Email" type="email" name="email" value="user@email.com" />
              <InputFormField label="Mobile" type="tel" name="mobile" value="+358" />
              </div>
              
              <div>
              <input type="checkbox" name="agreement" />
              <label>I wish to receive the updates and information about the oppertunities in future in this email.</label>
              </div>
              
              <div className="form-actions side-by-side">
              <button className="btn btn-warning">  Cancel</button>
              <button className="btn btn-accept">Save and Continue later <i class="fas fa-angle-right"></i></button>
              <button className="btn btn-accept"> Next <i class="fas fa-angle-right"></i></button>
              </div>

              
          </form>
    

        
      </div>
    );
  }
}