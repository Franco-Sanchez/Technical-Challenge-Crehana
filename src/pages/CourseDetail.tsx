import Header from '../components/UI/Header'
import Main from '../components/courseDetail/Main';

function CourseDetail({ goto }) {
  return (
    <div>
      <Header 
        title="Crashcourse"
        text="Registrate gratis"
      />
      <Main />
    </div>
  )
}

export default CourseDetail;