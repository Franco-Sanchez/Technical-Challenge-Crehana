import React from 'react';
import Header from '../UI/Header';
import MainCatalog from '../layouts/Main_catalog';

function CourseCatalog() {
  return (
    <div>
      <Header 
        title="Crashcourse"
        text="Registrate gratis"
      />
      <MainCatalog />
    </div>
  )
}

export default CourseCatalog;