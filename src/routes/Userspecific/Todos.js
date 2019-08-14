import React, { Component } from 'react';
import { userTodo } from '../../Userlist';
import '../../style.css';

import styled from 'styled-components';
import { buttonCard } from '../Home';


export default class Todos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: [],
		};
		this.setTodo = this.setTodo.bind(this);
  }
  
	componentDidMount() {
		userTodo(this.setTodo);
	}

	setTodo(data) {
		this.setState({
			todo: data,
		});
	}

	render() {
    const filteredTodoArray = this.state.todo.filter(ele => ele.UserId === Number(this.props.match.params.usernumber));
		const allData = filteredTodoArray.map(ele => {
			return (
				<a href="a" key={ele.id}>
					{ele.title}
				</a>
			);
		});
		const doneData = filteredTodoArray
			.filter(ele => ele.completed === true)
			.map(ele => {
				return (
					<a href="a" key={ele.id}>
						{ele.title}
					</a>
				);
			});
		const undoData = filteredTodoArray
			.filter(ele => ele.completed === false)
			.map(ele => {
				return (
					<a href="a" key={ele.id}>
						{ele.title}
					</a>
				);
			});

    const { match, history } = this.props;
    
		return (
			<div className="container">
				<div className="row">
					<div className="col-4">
						<Cont>
              <Button onClick={() => {
										history.push(`/users/${match.params.usernumber}`);
									}}>유저 프로필</Button>
              <Button onClick={() => {
										history.push(`/users/${match.params.usernumber}/todos`);
									}}>투두 <Span>{allData.length}</Span></Button>
						</Cont>
					</div>
					<div className="col-7">
						<Container>
							<div className="drdown">
								<button className="drbtn">
									모든 투두
									<I className="fa fa-caret-down"></I>
								</button>
								<div className="drdown-content">{allData}</div>
							</div>
							<div className="drdown">
								<button className="drbtn">
									완료한 투두
									<I className="fa fa-caret-down"></I>
								</button>
								<div className="drdown-content">{doneData}</div>
							</div>
							<div className="drdown">
								<button className="drbtn">
									해야할 투두
									<I className="fa fa-caret-down"></I>
								</button>
								<div className="drdown-content">{undoData}</div>
							</div>
						</Container>
					</div>
					<div className="col-1">
						<ButtonHome
							onClick={() => {
								history.push('/');
							}}>
							홈
						</ButtonHome>
					</div>
				</div>
			</div>
		);
	}
}


const ButtonHome = styled.button`
  ${buttonCard} 
  background-color: ${props => props.theme.homeButtonColor}
`;

const I= styled.i`
  float: right;
`
const Cont = styled.div`
  margin-top: 20px;
`

const Container = styled.div`
  margin-top: 20px;
  padding-right: 300px;
`

const Button = styled.button`
  display: block;
  color: ${props => props.theme.buttonColor};
  width: 200px;
  text-align: left;
  border: none;
  background-color: white;
  border-radius: 10px;

  : hover {
    color: white;
    background-color: ${props => props.theme.buttonColor};
  }
`

const Span = styled.span`
  float: right;
  background-color: #999999;
  padding: 2px 6px;
  border-radius: 50%;
  color: white;
`

    // option: after로 props넘기는 것 실패함. 
    // 리액트 부트스트랩으로 dropdown 만들기 실패함.
    // 라우트 파일 안에 파일로 새로 빼는 것 실패함. 
    // css, 라우터, styled components들 적용 안되던가나 div  넣고빼고 유무 등 이해 안가는 부분 확인 
    // todo hover시 화면 움직이는 이유? 
    // advanced 과제 하기 