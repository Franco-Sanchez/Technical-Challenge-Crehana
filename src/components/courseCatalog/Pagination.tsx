import '../../css/Pagination.css'

function Pagination() {
  return(
    <div className="pagination">
        <a className="pagination--previous" href="#previous">
          <i className="fas fa-chevron-left"></i>
        </a>
        <p><span className="selected">01</span> / <span>03</span></p>
        <a className="pagination--next" href="#next">
          <i className="fas fa-chevron-right"></i>
        </a>
    </div>
  )
}

export default Pagination;