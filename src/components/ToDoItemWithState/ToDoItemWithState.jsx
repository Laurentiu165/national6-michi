import { Component } from "react"

export class ToDoItemWithState extends Component {
  state = {
    nrOfClicks: 0,
  };
  handleIncreaseClicks = ()=>{
    console.log("click on item");
    this.setState({nrOfClicks: 1 })
  }

  render(){
    return(
      <div className="to-do-item" onClick={this.handleIncreaseClicks}>
        <input type="checkbox" defaultChecked={this.props.checkValue}/>
        <p>{this.props.label}</p>
        <img src="https://www.flaticon.com/svg/vstatic/svg/3221/3221897.svg?token=exp=1619107201~hmac=6781a839dc8c615ca1c540c2d51c3443" alt="trash-can"/>
        <p>{this.state.nrOfClicks}</p>
      </div>
    )
  }
}