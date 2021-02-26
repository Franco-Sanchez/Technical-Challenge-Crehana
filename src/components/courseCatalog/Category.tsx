import CategoryItem from "./CategoryItem";
import STORE from "../../store";
import "../../css/Category.css";

function Category({ title }: any) {
  return (
    <div className="categories">
      <h4>{title}</h4>
      <div className="categories__container">
        {STORE.categories.slice(0, 8).map((category: any) => {
          return <CategoryItem key={category.id} name={category.name} />;
        })}
      </div>
      <div className="categories__move">
        <a className="categories__move--previous" href="#previous">
          <i className="fas fa-chevron-left"></i>
        </a>
        <p>
          <b>01</b> / 03
        </p>
        <a className="categories__move--next" href="#next">
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Category;
