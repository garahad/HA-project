import React, { Component } from 'react';
import { userList, userTodo  } from '../../Userlist';
import Userprofile from './Userprofile';
import styled from 'styled-components';
import { buttonCard } from '../Home';

export default class Userspecific extends Component {
	constructor(props) {
		super(props);
		this.state = {
      user: '',
      todo: []
		};
    this.showProfile = this.showProfile.bind(this);
    this.setTodo = this.setTodo.bind(this);
	}

	componentDidMount() {
    userList(this.showProfile);
    userTodo(this.setTodo);
	}

	setTodo(data) {
		this.setState({
			todo: data.filter(ele => ele.UserId === Number(this.props.match.params.usernumber))
		});
	}

	showProfile(data) {
    console.log(data)
		this.setState({
			user: data.filter(
				ele => ele.id === Number(this.props.match.params.usernumber),
			)[0],
		});
	}

	render() {
		const { match, history } = this.props;
		return this.state.user === '' ? null : (
			<div className="container">
				<div className="row">
					<div className="col-4">
						<div>
							<Cont>
              <Button onClick={() => {
										history.push(`/users/${match.params.usernumber}`);
									}}>유저 프로필</Button>
              <Button onClick={() => {
										history.push(`/users/${match.params.usernumber}/todos`);
									}}>투두 <Span>{this.state.todo.length}</Span></Button>
						</Cont>
						</div>
					</div>
					<div className="col-7">
						<Userprofile user={this.state.user} />
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

const Cont = styled.div`
  margin-top: 20px;
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

/* <Route exact path={`/users/:usernumber`} component={Userspecific}/>  */
/* <Route path={`/users/:usernumber/todos`} component={Todos}/>  */
// route 이런식으로 따로 빼는 것 아직 잘 못하겠음.
// history.push 로 쏘는 것과 link로 쏘는 것의 차이? 
// img src로 가지고 오는 것과  fetch json으로 불러오는 것의 차이. 
