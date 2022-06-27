import React,{Component} from 'react'
import axios from 'axios'

 class PostLists extends Component{
     constructor(props){
         super(props)

         this.state={
             posts:[]
         }
     }

     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(responce =>{
             console.log(responce)
             this.setState({posts:responce.data})
         })
         .catch(error =>{
             console.log(error)
         })
     }
    render(){
        const{posts}=this.state
        return(
            <div>
           list of posts
           {
               posts.length ?
               posts.map(post => <div key={post.id}>{post.body}</div>):null
            
           }
            </div>
        )
    }
}

export default PostLists;