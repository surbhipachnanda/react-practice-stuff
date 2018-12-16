import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Content} from 'components';
import {NavLink} from 'react-router-dom';
import { PlayerCard } from'components';
import {  avatar } from 'assets';

const players =[
    {
        name: 'Sherlock Holmes',
        rank: '1',
        college: 'BakersStreet',
        score: '221'
    },
    {
        name: 'James Bond',
        rank: '2',
        college: 'EnglandDuh',
        score: '007'
    }
];

class Leaderboard extends Component {
    render() {
        return(
            <div className={this.props.className}>
            
                <Content>
                    <div>
                        <NavLink to="/contests"><span className="navigation">All Contests</span></NavLink>
                        <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                        <NavLink to="/questions"><span className="navigation">101 Hack 55</span></NavLink>
                    </div>

                    <div className="area">
                        <div className="container">
                            <div className="heading">
                            <h1>Leaderboard</h1>
                            </div>
                            <div className="content">
                                {new Array(10).fill(0).map((_, i) => (
                                    <div className="details">    
                                        <div className="image">
                                            <img src={avatar} alt="" id="avatarimg" align="middle"/>
                                        </div>         
                                        <div className="name">
                                            <h3>{players[0].name}</h3>
                                        </div>     
                                        <div className="others">
                                            <PlayerCard key={i} player={players[i % players.length]} />                                       
                                        </div>       
                                    </div>
                                ))} 
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}
export default styled(Leaderboard)`

.stats{
    width:300px;
    height: 300px;
    border-radius: 6px;
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
        border:none;
        filter: drop-shadow(0 0 0.95rem #1f2032);
}
        .details{
            font-weight:400;
            font-size:0.7em;
        }
    > h3 {
		color: #fff;
		font-size: 1.4em;
		font-weight: 600;
	}
    .area{
        margin-top:30px;
        padding-right:100px;
        display:flex;
        justify-content : space-between;
        flex-direction:row;
    }
    

    ${Button}{
        top:20px;
        right:10px;
        position:absolute;
        background:#fd6b9a;
    }
    ${Button}:hover{
        background:#f77f6e;
    }

    .content{
        filter: drop-shadow(0px 5px 5px #282840);
       
        
    }
    .strength{
        margin-left:60px;
        font-weight:400;
        font-size:0.7em;
    }
    .details{
       
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
        
    }
    .details>*{
        background:black;
        margin: 10px;
    }
    .image{
        width:20%;
        align-self:center;
        
  
    }
    #avatarimg{
        height: 100px;
        border-radius: 50%;
       
        
    }
    .name{
        width:30%;
    }
    .others{
        width:50%;
    }
    
        
  
    .details:hover{
        color:#fff;
        background:#363559;
    }
    .container{
        
        border-radius: 6px;
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
        width:60%;
       
      
        border:none;
        filter: drop-shadow(0 0 0.95rem #1f2032);
    }
    border:none;

    .heading{
        z-index: 1;
        position: sticky;
	top: 0;
        filter: drop-shadow(0px 5px 5px #282840);
        border-radius: 6px 6px 0 0;
        height:55px;
        background: #fd6b9a; /* Old browsers */
        background: -moz-linear-gradient(45deg, #fd6b9a 9%, #f77f6e 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #fd6b9a 9%,#f77f6e 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #fd6b9a 9%,#f77f6e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fd6b9a', endColorstr='#f77f6e',GradientType=1 );
    }
    .heading1{
        text-align:center;
        filter: drop-shadow(0px 5px 5px #282840);
        border-radius: 6px 6px 0 0;
        height:55px;
        background: #249ec7; /* Old browsers */
        background: -moz-linear-gradient(45deg, #249ec7 9%, #4cd0c5 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #249ec7 9%,#4cd0c5 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #249ec7 9%,#4cd0c5 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#249ec7', endColorstr='#4cd0c5',GradientType=1 );
    }
    h1{
        line-height:55px;
        padding-left:10px;
        color:#fff;
    }
   
    #rank{
        font-size:1.2em;
        line-height:55px;
        padding-left:10px;
        color:#fff;
    }
    #rank>strong{
        color: #fff;
        font-size:1.5em;
    }
    #Capa_1{
        padding-top:10px;
        width:35px;
        height:35px;
    }
    .box{
        border-radius:6px;
        text-align:center;
        height:45px;
        filter: drop-shadow(2px 5px 5px #282840);
        width:45px;
        background:#249ec7;
        transition:0.3s;
        svg{
            path{
                fill:#fff;
            }
        }
    }
    .box:hover{
        filter: drop-shadow(0px 0px 8px #1b1b2c);
        cursor:pointer;
        border-radius:46px;
        border: 1px solid white;
        // background:#249ec7;
    }
    .otherstat{
        line-height:50px;
        flex-dirextion:row;
        flex-wrap:wrap;
        padding-right:90px;
        margin:20px;
        position:relative;
        display:flex;
        justify-content:space-between;
    }
    #lead{
        color: #d7d7ef;
        font-weight:600;
        font-size:1.2em;
        line-height:2;
    }
    .beauty{
        bottom:85px;
        right:0px;
        font-size:100px;
        position:absolute;
        opacity:0.02;
    }

    .navigation, .navigation1{
        font-weight:600;
        font-size:13px;
        color:#6a93ff;
        transition:0.5s;
    }
    .navigation1{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    a{
        text-decoration:none;
    }
    .navigation:hover{
        color:#fff;
    }
`;