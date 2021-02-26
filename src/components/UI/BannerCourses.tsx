import ButtonDark from './ButtonDark';
import '../../css/BannerCourses.css';

function BannerCourses() {
  return (
    <div className="banner">
      <h2>Title H2 - <span>banner cursos nuevos</span></h2>
      <ButtonDark text="Comprar ahora"/>
    </div>
  )
}

export default BannerCourses;