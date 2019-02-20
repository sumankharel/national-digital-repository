import React, { Component } from "react";
import "../../styles/uploadyourthesis.css";
import InputFormField from "../../common/InputFormField";

 export default class uploadyourthesis extends Component {
  render() {
    return (
      <div className="upload your thesis">

       <form>
                     <InputFormField label="Thesis Title" name="PLEASE ENTER THE TITLE OF YOUR THESIS" value="PLEASE ENTER THE TITLE OF YOUR THESIS" />
                      <InputFormField label="THESIS ABSTRACT" name="PLEASE ENTER THE ABSTRACT OF YOUR THESIS" value="PLEASE ENTER THE ABSTRACT OF YOUR THESIS" />
                      <InputFormField label="THESIS REFERENCE" name="PLEASE ENTER THE REFERENCE OF YOUR THESIS" value="PLEASE ENTER THE REFERENCE OF YOUR THESIS" />
                      <InputFormField label="KEYWORDS" name="PLEASE ENTER SIX KEYWORDS OF YOUR THESIS" value="PLEASE ENTER SIX KEYWORDS OF YOUR THESIS" />



                        <div className="select-list">
                        <InputFormField label="ANY SOURCE IF YOU HAVE RECEIVED ANY FUNDING" name="PLEASE SELECT THE SOURCE IF YOU HAVE RECEIVED ANY FUNDING" />
                        <select className="source_type" id="source_type"><option value="NGO">NGO</option>
                                <option value="INGO">INGO</option>
                                <option value="OWN">OWN</option>
                        </select>
                         </div>

                         <div className="form-actions side-by-side">
                             <button className="btn btn-accept"> <i class="fas fa-angle-left"></i><i class="fas fa-angle-left"></i>Back</button>
                             <button className="btn btn-accept">Save and Continue later <i class="fas fa-angle-right"></i></button>
                             <button className="btn btn-accept"> Next <i class="fas fa-angle-right"></i></button>
                             </div>


 </form>
</div>
    );
  }
 }
