import React, { Component } from 'react';
import styled from 'styled-components';
import {  avatar } from 'assets';



class PlayerCard extends Component{
	
	render() {
		return (
			<div className={this.props.className}>    
				<div className="rank">
					<h3>{this.props.player.rank}</h3>
				</div>
				<div className="image">
					<img src={avatar} alt="" id="avatarimg"/>
				</div>            
				<div className="others">
					<div className="name">
						<h4>{this.props.player.name}</h4>
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
        justify-content: space-around;
        color:#dfdfe7;
        font-size:1.3em;
        font-weight:700;
        line-height:1;
        padding:10px;
        // margin:20px 0 20px 0;
        background:${({joined }) => ((joined===0) ? '#2f2e4d' : '#2f2f4k')};;
		transition:0.2s;
		text-transform: uppercase;

        
    .details>*{
        margin: 10px;
    }
    .image{
		border-radius: 50%; 
		margin:0 25px 0 50px;
	}

    #avatarimg{
        height: 70px;
        border-radius: 50%; 
		padding:3px; 
		align:middle;
		margin-top:5px;
		border: 2px solid ${({color }) => (color)};
		border-width:thick;
		
    }
   
	.rank{
        position:relative;
    }
    .rank>h3{
        text-align: center;
        margin:0 10px 0 10px;
        position:absolute;
        top:50%;
        width:100%;
        -ms-transform:translateY(-50%);
        transform:translateY(-50%);
        color: #fff;
        font-size: 2em;
        font-weight: 600;
        
    }
    .others{
        width:70%;
        display:flex;
        flex-direction: column;
	}
	.name{
		margin-top:2px;
	}
    .name>h4{
        color: #fff;
		font-size: 0.8em;
		font-weight: 500;margin-top:9px;
	}
	  
    .data>*{
        width:50%;
    }
    .data{
        height:40%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap:wrap;
        width:45%;
	}
	
    .data_item{
        color: #fff;
		font-size: 0.7em;
		text-align: left;
		height: 20px;
		font-weight:600;
		margin-top:1px;
		text-transform: capitalize;
    }
    .header{
		color:#939393;
		font-weight:400;
		font-size:0.5em;
		margin-top:5px;
        
    }
    
        
  
    .details:hover{
        color:#fff;
        background:#363559;
    }
`;

