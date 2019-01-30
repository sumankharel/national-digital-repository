import React from "react";
import PropTypes from "prop-types";

const SearchDocumentForm = props => {
  return (
    <div className="search-document-form">
      <div>
        <input
          type="text"
          placeholder="Search with title, keyword, author's name"
        />
      </div>
      <div>
        <input type="text" placeholder="University" />
        <input type="text" placeholder="Central Campus" />
        <input type="text" placeholder="Subject" />
      </div>
      <div className="advanced-search">
        <input type="checkbox" />
        <label>Advanced Search</label>
      </div>
      <button type="submit"> Search</button>
    </div>
  );
};

SearchDocumentForm.propTypes = {};

export default SearchDocumentForm;
