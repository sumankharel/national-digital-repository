import React, { Component } from "react";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
import "../../styles/uploadthesis.css";
// SAMPLE UPLOAD THESIS COMPONENT, YOU CAN UPDATE OR CREATE YOUR OWN
export default class UploadThesis extends Component {
  render() {
    return (
      <div className="upload-thesis">
       

        <h2>UPLOAD YOUR THESIS</h2>

        <form>
          <table id="UploadTable"
              className="table table-bordered
                     table-condensed table-striped">
        <thead>
          <tr>
            <th><button type="button"  className="btn btn-success btn-lg btn-block">SELECT  YOUR  THESIS</button></th>
            <th><input type="file" name="datafile"></input></th>
           <th><button type="button"  classNames="btn btn-danger">REMOVE</button></th>
          </tr>
          <br>
          <tr>
        <th><button type="button"  className="btn btn-success btn-lg btn-block">SUPPLEMENTARY DOCUMENTS</button></th>
        <th><input type="file" name="datafile"></input></th>
        <th><button type="button"  className="btn btn-danger">REMOVE</button></th>
       </tr>
            <br>
            <tr>
            <th><button type="button"  className="btn btn-success btn-lg btn-block">FIELD  VISIT  PHOTOGRAPHS</button></th>
           <th><input type="file" name="datafile"></input> size="40"></th>
          <th><button type="button"  className="btn btn-danger">REMOVE</button></th>

         </tr>
            </br>
            </br>
            

        </thead>
      </table>

    

  <div  className="checkbox">
      <input type="checkbox" name="thesis" value=""></input>I conform the given information is correct<br>
      <input type="checkbox" name="thesis" value=""></input>I agree the terms and conditions<br>
  </br>
  </br>
   </div>

  <div  className="button">
      <a button className="previous"> BACK</a>
      <a button className="next">SAVE AND CONTINUE LATER &raquo;</a>
      <a button className="next">NEXT &raquo;</a>
  </div>
  </form>
</div>

       
    );
  }
}

//const mapStateToProps = state => ({});

//const mapDispatchToProps = {};

//UploadThesis.propTypes = {};

//export default connect(
 //mapStateToProps,
//mapDispatchToProps
//  )
//(UploadThesis);
