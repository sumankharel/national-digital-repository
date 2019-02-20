import React, { Component } from "react";
import "../../styles/institution.css";
import InputFormField from "../../common/InputFormField";

export default class InstitutionInfo extends Component {
  render() {
    return (
      <div className="institution">

      <form>

      <InputFormField label="Name of the university" name="universityName" value="Oulu University" />
        <InputFormField label="Name of the campus" name="campusName" value="Oulu UAS" />
        <InputFormField label="Location" name="location" value="Oulu, Finland" />

        <div className="side-by-side">
        <InputFormField label="Start Year" name="startYear" type="Date" />
        <InputFormField label="End Year" name="endYear" type="Date" />
        </div>

        <div  className="side-by-side">
        <InputFormField label="Thesis Author" name="thesisAuthor" value="John Doe" />
        <InputFormField label="Theis Co-Author" name="thesisCoAuthor" value="John Smith" />
        </div>

        <div  className="side-by-side">
        <InputFormField label="Defense Date" name="defenseDate" type="Date" />
        <InputFormField label="Approval Date" name="approvalDate" type="Date" />
        </div>

        <div  className="side-by-side">
        <InputFormField label="Thesis Supervisor " name="thesisSuperVisor" value="John Doe" />
        <InputFormField label="Theis Co-SuperVisor" name="thesisCoSuperVisor" value="John Smith" />
        </div>

        <div className="form-info red-info">
        <p>The pre-filled data in the above fields according the information we obtained
    from your academic institutiion. Please check them carefully, if you find any
    incorrect information kindly contact to yout campus administration.</p>
        </div>


        <div className="form-actions side-by-side">
        <button className="btn btn-warning">  Cancel</button>
        <button className="btn btn-accept">Agree / Next <i class="fas fa-angle-right"></i></button>
        </div>
      </form>

      </div>
    );
  }
}