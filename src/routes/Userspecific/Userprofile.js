import React from 'react';
import styled from 'styled-components';

function Userprofile({ user }) {
	return !user ? null : (
		<div>
			<Img
				src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
				alt=""
			/>
      <Container>
        <table >
          <tbody>
            <tr>
              <th>이름</th>
              <td>{user.name}</td> 
            </tr>
            <tr>
              <th>이메일</th>
              <td>{user.email}</td> 
            </tr>
            <tr>
              <th>모바일</th>
              <td>{user.phone}</td> 
            </tr>
          </tbody>
        </table>
      </Container>


		</div>
	);
}

export default Userprofile;


const Container = styled.div`
  border: 1px solid gray;
  margin-right: 300px;
`

const Img = styled.img`
  margin: 20px 10px;
`
