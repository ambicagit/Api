//  import React from 'react'

//  const Parent = ({count}) => {
//      return(
//          <div>
//              {count}
//          </div>
//      )
//  }

// export default Parent
 


//  import React from 'react'

//  const Parent = ({count}) => {
//      return(
//          <div>
//              {count}
//          </div>
//      )
//  }

// export default Parent;
 









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

