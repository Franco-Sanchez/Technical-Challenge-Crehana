import Categories from "./Categories";
import '../../css/Main.css'
import Courses from "./Courses";

function Main() {
  return (
    <main className="main">
      <Categories title="Title H4 - Categorias" />
      <Courses />
    </main>
  )
}

export default Main;