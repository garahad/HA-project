import React from 'react';
import { /*Route,*/ Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Home(props) {
	return (
		<Div>
			어플리케이션을 골라주세요
			<br></br>
			<br></br>
			<div>
				<Button onClick={() => props.history.push('/users')}>
				  투두
				</Button>
				<BoardButton>
					<StyledLink to="/">게시판</StyledLink>
				</BoardButton>
			</div>
		</Div>
	);
}

export default Home;

const Div = styled.div`
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	margin: 100px;
	padding: 100px;
	background-color: #f0f0f0;
	border-radius: 10px;
`;

export const buttonCard = css`
	color: white;
	padding: 5px 20px;
	border-radius: 10px;
`;

const Button = styled.button`
  ${buttonCard}
  background-color: ${props => props.theme.buttonColor};
  font-size: 20px;
  margin-right: 20px;
`;

const BoardButton = styled.button`
  ${buttonCard}
  background-color: ${props => props.theme.homeButtonColor};
  font-size: 20px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
	:hover {
		text-decoration: none;
		color: black;
	}
`;
