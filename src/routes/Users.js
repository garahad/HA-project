import React from 'react';
import { userList } from '../Userlist';
import styled from 'styled-components';
import { buttonCard } from './Home';

export default class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			userId: 0,
		};
		this.viewUsers = this.viewUsers.bind(this);
		this.selectOneguy = this.selectOneguy.bind(this);
	}

	componentDidMount() {
		userList(this.viewUsers);
	}

	viewUsers(data) {
		this.setState({
			users: data,
		});
	}

	selectOneguy(e) {
		this.setState({
			userId: e.target.value,
		});
	}

	render() {
		const showingUsers = this.state.users.map(ele => (
			<option key={ele.id} value={ele.id}>
				{ele.name}
			</option>
		));
		return (
			<div>
        <HomeButton
          onClick={() => {
            this.props.history.push('/');
          }}>
          홈
        </HomeButton>

				<Container>
					<div>
						<Select
							defaultValue={'default'}
							name="유저 리스트"
							size={this.state.users.length}
							onChange={this.selectOneguy}>
							<Option key="0" value="default" disabled>
								유저 리스트
							</Option>
							{showingUsers}
						</Select>
					</div>
					<SelectButton
						onClick={() => {
							this.props.history.push(`/users/${this.state.userId}`);
						}}>
						선택
					</SelectButton>
					<BackButton
						onClick={() => {
							this.props.history.goBack();
						}}>
						뒤로 가기
					</BackButton>
				</Container>
			</div>
		);
	}
}

const SelectButton = styled.button`
  ${buttonCard}
  background-color: ${props => props.theme.buttonColor}
  margin-right: 10px;
`;

const BackButton = styled.button`
  ${buttonCard}
  background-color: ${props => props.theme.backButtonColor}
`;

const HomeButton = styled.button`
  ${buttonCard}
  background-color: ${props => props.theme.homeButtonColor}
  float: right;
`;

const Container = styled.div`
	text-align: center;
	width: 100%;
	padding: 10px;
	clear: both;
`;

const Select = styled.select`
	width: 130px;
	height: 300px;
	overflow: hidden;
  color: gray;
  text-align: center;

	option: hover {
		background: #e0eefd;
	}
`;

const Option = styled.option`
	color: ${props => props.theme.buttonColor};
	border-bottom: 1px solid gray;
	text-align: center;
`;
