import './category-item.component.scss'

function CategoryItem({category})
{
    const {imageUrl,title} = category;
    return(
        <div className ="category-container"  >
         {/*<img> */}
         <div className = "background-image" style={{
          backgroundImage: `url(${imageUrl})`
         }}/>
         <div className ="category-body-container">
            <h2>{title}</h2>
            <p>shop now</p>
         </div> 
      </div>
    )
}

export default CategoryItem;