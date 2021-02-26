import Header from '../components/UI/Header';
import Main from '../components/courseCatalog/Main';
import BannerCourses from '../components/UI/BannerCourses';

function CourseCatalog() {
  return (
    <div>
      <Header 
        title="Crashcourse"
        text="Registrate gratis"
      />
      <BannerCourses />
      <Main />
    </div>
  )
}

export default CourseCatalog;