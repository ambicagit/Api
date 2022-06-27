
// import React,{useState} from "react";
// import TodoList from './TodoList';
// import Parent from './Parent';

// const App =()=>{
//     const [count,setCount]=useState(0)

//     const incNum=()=>{
//         if(count!==10){
//             setCount(count+1);
//         }
//     }
//     const decNum=()=>{
//         if(count!==0){
//             setCount(count-1);
//         }
//     }

//     return(
//         <div>
//             <center>
//             <Parent count={count}/>
//             <TodoList incNum={incNum} decNum= {decNum}/>
//             </center>
//         </div>
//     )
// }
// export default App;









// import {Component}from 'react';
// import Child from './Child';
// import Parent from './Parent'   

// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = {count: 0};

//         this.outputEvent = this.outputEvent.bind(this);
//         this.outputEvent1=this.outputEvent1.bind(this);
//         }
//     outputEvent(event) {
//         const {count}=this.state
//         if(count===10){
//                 this.setState({count:10});
//         }
//                  else{
//         this.setState({count: this.state.count+1});

//         }
//     }
//     outputEvent1(event){
//         const {count}=this.state
//         if(count===0){
//             this.setState({count:0});
//         }
//         else{
//         this.setState({count: this.state.count-1});
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <center>
//                     <Parent count = {this.state.count} />

//                 <Child clickHandler={this.outputEvent} clickHandler1={this.outputEvent1}/>
//                 </center>
//             </div>
//         );
//     }
// }

// export default App;


// import React from 'react';
// import Counter from './components/Counter';
// import Buttons from './components/Buttons';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.counter1 = React.createRef();
//   }
//   render() {
//     return (
//       <div>
//           <center>
//            <Counter  ref={this.counter1} />
//            <Buttons />
//         </center>
//       </div>
//     );
//   }
// }

// export default App;








// import React, { useState } from "react"
// const App = ()=>{

//     const [count,setCount] = useState(0)
//     return(
//         <div>
//             <center>
//                 <button>increase</button>
//                 <button>decrease</button>
//             </center>
//         </div>
//     )
// }




























// import React, {useState} from "react";
// import Count from "./components/Count";
// import Buttons from "./components/Buttons";

// const App=()=>{
//     const [count,setCount] = useState(0);
//     return(
//         <div>
//             <center>
//                 <Count countValue={count}/>
//                 <button onClick={()=>setCount(count+1)} disabled={count===10}>increase</button>
//                 <button onClick={()=>setCount(count-1)} disabled={count===0}>decrease</button>
//             </center>
//         </div>
//     )
// }
// export default App;





































// import React from 'react';
// import Counter from './components/Counter';
// import Buttons from './components/Buttons';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.counter1 = React.createRef();
//   }

// //   Increase = () => {
// //     this.counter1.current.Increase();
// //   }

// //   Decrease = () => {
// //     this.counter1.current.Decrease();
// //   }

//   render() {
//     return (
//       <div>
//           <center>
//            <Counter  ref={this.counter1} />
//            <Buttons />
//         {/* <button onClick={() => this.Increase()}>Increase</button>
//         <button onClick={() => this.Decrease()}>Decrease</button> */}
//         </center>
//       </div>
//     );
//   }
// }

// export default App;




// import React,{useState} from "react";
// import Child from './component/Child';


//  function Parent(){
//      const [count, setCount]=useState(0);


//      const handleClick = num=>{
//          setCount(current =>current+num);
//      };
//      return(
//          <div>
//              <Child handleClick={handleClick}/>
//              <h2>count:{count}</h2>
//          </div>
//      );
//  }
//  export default Parent;









// import React,{component} from 'react';              

// class Counter extends component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:1,
//         };
//     }
//     incrementCount=()=>{
//         this.setState({
//             count: this.state.count+1,
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={ incrementCount }>increase</button>
//             </div>
//         );
//     }
// }
// export default Counter;








// import React from 'react';
// import Child from './Child';

// class Parent extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {count: 0};

//         this.outputEvent = this.outputEvent.bind(this);
//         this.outputEvent1=this.outputEvent1.bind(this);
//         }
//     outputEvent(event) {
//         const {count}=this.state
//         if(count===10){
//                 this.setState({count:10});
//         }
//                  else{
//         this.setState({count: this.state.count+1});

//         }
//     }
//     outputEvent1(event){
//         const {count}=this.state
//         if(count===0){
//             this.setState({count:0});
//         }
//         else{
//         this.setState({count: this.state.count-1});
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <center>
//                 {this.state.count}
//                 <Child clickHandler={this.outputEvent} clickHandler1={this.outputEvent1}/>
//                 </center>
//             </div>
//         );
//     }
// }

// export default Parent;























import React from "react"
import PostForm from "./PostForm";
// import PostLists from './PostLists';


const App = () => {
    return (
        <div>
            <center>
                {/* <PostLists /> */}
                < PostForm />
            </center>
        </div>

    )
}
export default App;  