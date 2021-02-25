import React from 'react';
import Button from './Button';
import '../../css/Banner_courses.css'

function BannerCourses() {
  return (
    <div className="banner">
      <h2>Title H2 - <span>banner cursos nuevos</span></h2>
      <Button text="Comprar ahora"/>
    </div>
  )
}

export default BannerCourses;