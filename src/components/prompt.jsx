import React from 'react';
import { connect } from 'react-redux';

import query from '../actions/index';

import './stylesheets/prompt.scss';

const Prompt = (props) => (
  <div className="prompt">
    <input
      type="text"
      placeholder="algorithms"
      onKeyDown={(e) => {
        if (e.key === 'Enter') props.query(e.target.value);
      }}
    />
  </div>
);

export default connect(null, { query })(Prompt);
