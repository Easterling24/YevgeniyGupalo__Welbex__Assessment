import React from 'react';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
	min-height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	border-radius: 20px;
	border: 5px solid RGBA(0,0,0,0.17);
`;

const LeftSideContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;

	& > h1 {
		letter-spacing: 4px;
		font-size: 45px;
	}
`;

const RightSideContainer = styled.div`
	display: flex;
	align-items: center;
	flex: 2;
	padding: 40px;
`;

function HomeScreen() {
	return (
		<HomePageWrapper>
			<Container>
				<LeftSideContainer>
					<h1>Welbex</h1>
				</LeftSideContainer>

				<RightSideContainer>
					<p>
						Greetings, welcome to this very basic site crafted with react router and some redux logic
						implemented in it. That SAP application has functionalities such as adding/modifying/marking the
						to-do items in the list, navigating through all data fetched retrieved using axios. As a small
						bonus, dark mode was added so that the user can rest his/her eyes, for that, some context
						functionalities were used. I hope you will enjoy that brief tour!{' '}
					</p>
				</RightSideContainer>
			</Container>
		</HomePageWrapper>
	);
}

export default HomeScreen;
