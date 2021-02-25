import React from 'react';
import BannerCourses from '../UI/Banner_courses';
// import Course from '../uploader/Course';
import '../../css/Main.css'

function MainCatalog() {
  return (
    <div className="main">
      <BannerCourses />
      {/* <Course /> */}
    </div>
  )
}

export default MainCatalog;