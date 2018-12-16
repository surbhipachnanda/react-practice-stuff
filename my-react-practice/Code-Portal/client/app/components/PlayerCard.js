import React from 'react';
import styled from 'styled-components';


const PlayerCard =({ className, player, joined}) =>(
    <div className={className}>
        <p>RANK|COLLEGE|SCORE</p>
        <p>{player.rank}
            {player.college}
             {player.score}
        </p>
    </div>
);

export default styled(PlayerCard)`
margin: 0 1.5em 1.5em 0;
	border-radius: 20px;
	background-color: ${({ joined }) => (joined ? '#44db5e' : '#787cf7')};
	width: 100%;
	text-align: left;
	padding: 1em;
	filter: drop-shadow(8px 9px 8px rgba(0, 0, 0, 0.13));

	> h3 {
		color: #fff;
		font-size: 1.4em;
		font-weight: 600;
	}

	> p {
		color: #fff;
		font-size: 0.7em;
		text-align: left;
		height: 20px;
	}
`;

