import React, { Component } from "react";
import "../../styles/uploadyourthesis.css";
//import InputFormField from "../../common/InputFormField";

 export default class uploadyourthesis extends Component {
  render() {
    return (
      <div className="upload your thesis">

       <form>
                        <label>THESIS TITLE</label>
                        <input type="text" class="form-control no-border" name="TITLE" placeholder="PLEASE ENTER THE TITLE OF YOUR THESIS"></input><hr class="hr1"/>

                        <label>THESIS ABSTRACT</label>
                        <input type="text" class="form-control no-border" name="ABSTRACT"placeholder= "PLEASE ENTER THE ABSTRACT OF YOUR THESIS"></input><hr class="hr1"/>

                        <label>THESIS REFERENCE</label>
                        <input type="text" class="form-control no-border" name="REFERENCE"placeholder= "PLEASE ENTER THE REFERENCE OF YOUR THESIS"></input><hr class="hr1"/>

                        <label>THESIS KEYWORDS</label>
                        <input type="text" class="form-control no-border" name="KEYWORDS" placeholder="PLEASE ENTER SIX KEYWORDS OF YOUR THESIS"></input><hr class="hr1"/>

                        <div class="select-list">
                        <label>SOURCE IF YOU HAVE RECEIVED ANY FUNDING</label>
                        <input type="text" class="form-control no-border" name="FUNDING" placeholder="PLEASE SELECT THE SOURCE IF YOU HAVE RECEIVED ANY FUNDING"></input><hr class="hr1"/>
                        <select name="source_type" id="source_type">
                                <option value="NGO">NGO</option>
                                <option value="INGO">INGO</option>
                                <option value="OWN">OWN</option>
                        </select>
                         </div>

                    </form>
   </div>
    

<div class="button">
<a href="#" class="previous"> BACK</a>
<a href="#" class="next">SAVE AND CONTINUE LATER &raquo;</a>
<a href="#" class="next">NEXT &raquo;</a>
</div>

    );
  }
 }