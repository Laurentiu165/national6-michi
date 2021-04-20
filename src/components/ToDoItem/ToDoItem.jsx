import "./ToDoItem.css"

export function ToDoItem(){
  return <div className="to-do-item">
    <input type="checkbox"/>
    <p>Item</p>
    <img src="https://www.flaticon.com/svg/vstatic/svg/3221/3221897.svg?token=exp=1618938204~hmac=24b615e044a4d30fe6947517dbf56efb" alt="trash-can"/>
  </div>
}