import React from 'react';

import './stylesheets/course.scss';

const getEmoji = (score) => {
  if (score > 200) return '🤩';
  if (score > 100) return '😃';
  if (score > 50) return '🙂';
  if (score >= 0) return '😐';
  return '🤮';
};

const Course = ({
  title,
  averageQuality,
  description,
}) => (
  <div className="course">
    <div className="course-main">
      <div className="course-details">
        <div className="course-title">{title}</div>
      </div>
      <div className="course-quality">{getEmoji(averageQuality)}</div>
    </div>
    <div className="course-desc">{description}</div>
  </div>
);

export default Course;
