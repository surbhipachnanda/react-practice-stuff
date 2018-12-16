import React, {Component} from 'react';

class Object_btn extends Component{
    constructor(){
        super();
        this.state={
            val: null
        };
    }
    obj=()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>res.json())
        .then((data)=>{
            var value=0;
            data.forEach(function(user){
                value+=1;
            });
            this.setState({
                val: value
            });
            console.log(value);
        })
        
    }

    render(){
        return (
            <div>
                
            <button onClick={this.obj}>
                Total Objects
            </button>
            <h1>{this.state.val}</h1>
            </div>
            
        );
    };
}

export default Object_btn;