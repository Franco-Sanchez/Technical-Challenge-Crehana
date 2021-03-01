import Header from '../components/UI/Header';
import Main from '../components/courseCatalog/Main';
import BannerCourses from '../components/UI/BannerCourses';

function CourseCatalog({ goto }) {
  return (
    <div>
      <Header 
        title="Crashcourse"
        text="Registrate gratis"
        goto={goto}
      />
      <BannerCourses 
        goto={goto}
      />
      <Main />
    </div>
  )
}

export default CourseCatalog;