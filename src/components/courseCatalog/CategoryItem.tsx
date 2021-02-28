import '../../css/Categories.css'

function CategoryItem({ name }: any) {
  return (
    <button className="categories__individual">
      <i className="fas fa-bullhorn"></i>
      {name}
    </button>
  )
}

export default CategoryItem;