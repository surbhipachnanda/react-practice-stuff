import React, {Component} from 'react';

class Email_btn extends Component{
    constructor(){
        super();
        this.state={
            value: null
        }
    }
    email=()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res)=>res.json())
            .then((data)=>{
                let output= 'Email IDs';
                for(var i=0;data[i]!=null;i=i+2)
                {                   
                    output+= `
                         ${data[i].email}
                        `;
                };
                this.setState({
                    value: output
                });
            })
    }


    render(){
        return(
            <div>
                <button onClick={this.email}>
                Alternate Email
                 </button>
                 <p>{this.state.value}</p>
            </div>
        );
    };
}
export default Email_btn;