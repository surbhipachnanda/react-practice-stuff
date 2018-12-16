import React, {Component} from 'react';

class Body_btn extends Component{
    constructor(){
        super();
        this.state={
            val: null
        }
    }
    
    email=()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res)=>res.json())
            .then((data)=>{
                var n=Math.floor(Math.random()*500)+1;
                console.log(data[n].id);
                var output=`${data[n].body}`;
                this.setState({
                    val: output
                });
            })
    }
    render(){
        return(
            <div>
                <button onClick={this.email}>
                    Random Body
                </button>
                <p>{this.state.val}</p>
            </div>
        );
    };
}

export default Body_btn;