import React, { Component } from 'react'
import "../../styles/thesis.css";
import InputFormField from "../../common/InputFormField";

export default class ThesisInfo extends Component {
  render() {
    return (
      <div className="thesis">
          <form>
              <InputFormField label="Thesis Title" name="thesisTitle" value="Please enter the title of your thesis" />
              <InputFormField label="Thesis Abstract" name="thesisAbstract" value="Please enter the title of your thesis" />
              <InputFormField label="Thesis Refrence" name="ThesisRefrence" value="please enter the refrence of your thesis" />

              <div className="side-by-side">
              <InputFormField label="Keywords" name="keywords" value=""  />
              <InputFormField name="" value="" />
              <InputFormField name="" value="" />
              </div>

              <div className="side-by-side">
              <InputFormField name="" value="" />
              <InputFormField name="" value="" />
              <InputFormField name="" value="" />
              </div>

              <InputFormField label="Any source of funding you received while writing this thesis ?" name="fundingSource" value="Please select the source if you have received any funding" />
          
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