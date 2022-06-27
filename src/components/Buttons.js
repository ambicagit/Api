import React,{Component} from "react"

class Buttons extends React.Component{
    Increase = () => {
        this.counter1.current.Increase();
      }
    
      Decrease = () => {
        this.counter1.current.Decrease();
      }
      render(){
          return(
              <div>
                  <center>
        <button onClick={() => this.Increase()}>Increase</button>
        <button onClick={() => this.Decrease()}>Decrease</button> 
        </center>
        </div>
          )
      }
}
export default Buttons;