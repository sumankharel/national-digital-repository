import React,{ Component } from "react";
import InputFormField from "../../common/InputFormField";
//import PropTypes from "prop-types";
import PrimaryButton from "../../common/PrimaryButton";

const UploadDocumentForm = props => {
  
  return (
    <div className="upload-document-form">
      <p>YOU MUST LOGIN TO UPLOAD YOUR THESIS</p>
      <form>
        <div className="form-actions side-by-side">
          <InputFormField label="USERNAME/EXAM REGISTRATION NUMBER" name="USERNAME/EXAM REGISTRATION NUMBER" /> 
          <InputFormField label="PASSWORD" name="PASSWORD"/>
         </div>
      
          
         <PrimaryButton type="submit">LOGIN</PrimaryButton>
             
    </form>
    </div>  
    
  );
};
  UploadDocumentForm.propTypes = {};
  
  export default UploadDocumentForm;
  





