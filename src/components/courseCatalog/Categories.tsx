import CategoryItem from "./CategoryItem";
import STORE from "../../store";
import "../../css/Categories.css";

function Categories({ title }: any) {
  return (
    <section className="categories">
      <h4>{title}</h4>
      <div className="categories__container">
        {STORE.categories.slice(0, 8).map((category: any) => {
          return <CategoryItem key={category.id} name={category.name} />;
        })}
      </div>
    </section>
  );
}

export default Categories;
