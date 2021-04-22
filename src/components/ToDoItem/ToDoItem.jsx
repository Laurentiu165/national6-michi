import "./ToDoItem.css"

export function ToDoItem(props){

  return (
    <div className="to-do-item">
      <input type="checkbox" defaultChecked={props.checkValue}/>
      <p>{props.label}</p>
      <img src="https://www.flaticon.com/svg/vstatic/svg/3221/3221897.svg?token=exp=1619107201~hmac=6781a839dc8c615ca1c540c2d51c3443" alt="trash-can"
      onClick={() => props.removeItem(props.label)}/>
    </div>

  )
}