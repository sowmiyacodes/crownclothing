import './categories.styles.scss';

function App() {
  const category = [{id : 1,name:"hats"},{id : 2,name:"sneakers"},{id : 3,name:"jackets"},{id : 4,name:"women"},{id : 5,name:"men"}];
  return (
    <div className="categories-container">
      {
        category.map((cat)=>(
        <div className ="category-container"  key = {cat.id}>
         {/*<img> */}
         <div className ="category-body-container">
            <h2>{cat.name}</h2>
            <p>shop now</p>
         </div> 
      </div>
        ))
      }
      
      
      
    </div>
  );
}

export default App;
