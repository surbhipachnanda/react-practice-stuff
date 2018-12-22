import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {Button, Content,Navbar,PlayerCard} from 'components';
import {NavLink} from 'react-router-dom';
import { avatar } from 'assets';


const colors = ['#7982d7','#b85fa1','#f8b06a' , '#71b1e6', '#f7e9a6', '#7cdbde'];

 
const players =[
    {

        name: 'Sherlock Holmes',
        rank: '1',
        organization: 'BakersStreet',
        score: '221'
    },
    {
        name: 'James Bond',
        rank: '2',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '3',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '4',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '5',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '6',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '7',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '8',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '9',
        organization: 'EnglandDuh',
        score: '007'
    }
];

class Leaderboard extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <Navbar />
                <Content>
                    <div>
                        <NavLink to="/contests"><span className="navigation">All Contests</span></NavLink>
                        <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                        <NavLink to="/questions"><span className="navigation">101 Hack 55</span></NavLink>
                        <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                        <NavLink to="/leaderboard"><span className="navigation">Leaderboard</span></NavLink>
                    </div>

                    <div className="area">
                        <div className="container">
                            <div className="heading">
                            <h1>Leaderboard</h1>
                            </div>
                            <div className="content">
                                {new Array(players.length).fill(0).map((_, i) => (
                                    <PlayerCard key={i} player={players[i % players.length]} color={colors[i%colors.length]} joined={i%2} />
                                ))} 
                            </div>
                        </div>
                    <div className="stats">
                        <div className="heading1">
                            <span id="rank"><strong>Your Profile</strong></span> 
                        </div>
                        <div className="otherstat">
                            
                            <div className="lead">
                                    <p>Sherlock Holmes</p>
                                    <p id="username">@SmartAss221</p>
                            </div>
                            <div className="box">
                                <img src={avatar} alt="" id="myavatar"/>
                            </div>
                            <div className="profile_details">
                                <p>Score</p>
                            </div>
                            <div className="profile_details">
                                <p>Rank</p>
                            </div>
                            <div className="values">
                                <p>221</p>
                            </div>
                            <div className="values">
                                <p>1</p>
                            </div>

                        </div>
                    </div>
                    </div>
                    
                </Content>
            </div>
        );
    }
}
var check = keyframes`
0%{
    transform: translateY(-30px);
    opacity:0;
}
100%{
    transform: translateY(0px);
    opacity:1;

}
`;
var check1 = keyframes`
0%{
    transform: translateY(30px);
    opacity:0;
}
100%{
    transform: translateY(0px);
    opacity:1;

}
`;
var Gradient = keyframes`
0% {
    background-position: 0% 50%
}
50% {
    background-position: 100% 50%
}
100% {
    background-position: 0% 50%
}
`;

export default styled(Leaderboard)`

    .stats{
        width:400px;
        height: 400px;
        border-radius: 6px;
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
        border:none;
        filter: drop-shadow(0 0 0.95rem #1f2032);
        margin-right:0px;
        animation: ${check1} 2s ease 1;
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
        padding-right:30px;
        display:flex;
        justify-content :space-between;
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

    .container{
        
        border-radius: 6px;
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
        width:60%;
        animation: ${check} 2s ease 1;
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
        animation: ${Gradient} 3s ease infinite;

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
        animation: ${Gradient} 3s ease infinite;
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
       
        border-radius: 50%; 
        transition:0.3s;
        border: 2px solid white;
        border-width:thick;
        // background:green;
        width:25%;
        padding:5px;
        margin-left:10px;
        position:relative;
        height: 100px;
        
    }

    #myavatar{
        height: 90px;
        border-radius: 50%; 
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
      
    }

    .box:hover{
        filter: drop-shadow(0px 0px 8px #1b1b2c);
        cursor:pointer;
        border-radius:50%;
        border: 1px solid white;
       
    }
    .otherstat{
        display:flex;
        flex-dirextion:row;
        flex-wrap:wrap;
        line-height:50px;
        margin:20px 0 0 0;
    }
    .lead{
        width: 65%;
        color: #d7d7ef;
        font-weight:600;
        font-size:1.2em;
        height:100px;
        line-height:50px;
        // background:red;
        text-align:center;
        text-transform:uppercase;  
        letter-spacing: 2px;      
    }
   
    .lead>#username{
        letter-spacing: 0px;
        font-weight:300;
        font-size:0.8em;
        text-transform:lowercase;
        
    }
    .profile_details{
        width:50%;
        // background:red;
        padding:20px;
        text-align:center;
        font-weight:500;
        font-size:1.2em;
        color:#939393;
        height:50px;
    }
    .values{
        width:50%;
        padding:20px;
        text-align:center;
        font-weight:700;
        font-size:2em;
        color:#d7d7ef;
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