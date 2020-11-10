/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';

import Course from './course';

import './stylesheets/results.scss';

const Results = ({ courses }) => (
  <div className={`results-container ${courses.length > 0 ? ' expanded' : ''}`}>
    <div className="results">
      {courses.map((course) => (
        <Course {...course} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  courses: state.query.results.map((r) => r.document),
});

export default connect(mapStateToProps, null)(Results);
