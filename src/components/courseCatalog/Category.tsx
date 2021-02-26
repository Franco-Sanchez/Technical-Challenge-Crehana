import CategoryItem from './CategoryItem'
import STORE from '../../store';
import '../../css/Category.css'

function Category({ title }: any) {
  return (
    <div className="categories">
      <h4>{title}</h4>
      <div className="categories__container">
        {STORE.categories.slice(0,8).map((category: any) => {
          return <CategoryItem key={category.id} name={category.name} />
        })}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Category;
