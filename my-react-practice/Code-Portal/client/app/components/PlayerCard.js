import React, { Component } from 'react';
import styled from 'styled-components';
import {  avatar } from 'assets';



class PlayerCard extends Component{
	componentDidMount() {
		console.log(this.props.color)
	}
	render() {
		return (
			<div className={this.props.className}>    
				<div className="rank">
					<h3>{this.props.player.rank}</h3>
				</div>
				<div className="image">
					<img src={avatar} alt="" className="avatarimg"/>
				</div>            
				<div className="others">
					<div className="name">
						<h3>{this.props.player.name}</h3>
					</div> 
					<div className="data">
						<div className="header">
							<p>Score</p>
						</div>
						<div className="header">
							<p>Organization</p>
						</div>
						<div className="data_item">
							<p>{this.props.player.score}</p>
						</div>
						<div className="data_item">
							<p>{this.props.player.organization}</p>
						</div>
					</div>                                     
				</div>     
    		</div>
		);
	}
	
}

export default styled(PlayerCard)`
	display:flex;
        flex-direction: row;
        justify-content: space-between;
        
        color:#dfdfe7;
        font-size:1.3em;
        font-weight:700;
        line-height:1;
        padding:10px;
        margin:20px 0 20px 0;
        background:#2f2e4d;
		transition:0.2s;
		text-transform: uppercase;

        
    .details>*{
        
        margin: 10px;
    }
    .image{
        border-radius: 50%; 
        align-self:center;
        border: 2px solid ${({color }) => (color)};
        position:relative; 
		border-width:thick;
		box-shadow:2px 2px 40px black;
	}

    .avatarimg{
        height: 70px;
        border-radius: 50%; 
		padding:3px; 
		
    }
   
    .rank{
        width:10%;
        position:relative;

       
    }
    .rank>h3{
        text-align: center;
        margin:0;
        position:absolute;
        top:50%;
        width:100%;
        -ms-transform:translateY(-50%);
        transform:translateY(-50%);
        color: #fff;
        font-size: 2.4em;
        font-weight: 600;
        
        
    }
    .others{
        width:70%;
        display:flex;
        flex-direction: column;
    }
    .name{
       
        color: #fff;
		font-size: 1em;
        
       
    }
    .data{
        height:40%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap:wrap;
        
    }
    .data>*{
		
		
    }
    .data_item{
        color: #fff;
		font-size: 0.7em;
		text-align: left;
        height: 20px;
    }
    .header{
		color:#6a93ff;
		font-weight:400;
		font-size:0.8em;
		margin-top:5px;
        
    }
    
        
  
    .details:hover{
        color:#fff;
        background:#363559;
    }
`;

