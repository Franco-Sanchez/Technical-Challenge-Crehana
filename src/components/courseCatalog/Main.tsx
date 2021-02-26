import BannerCourses from "../UI/BannerCourses";
import Category from "../courseCatalog/Category";
import '../../css/Main.css'

function Main() {
  return (
    <div className="main">
      <BannerCourses />
      <Category title="Title H4 - Categorias" />
    </div>
  )
}

export default Main;