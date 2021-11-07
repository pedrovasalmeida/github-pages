import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: ${props => props.theme.containerHeight};
	position: relative;

	padding: 2rem 0 0;

	overflow: hidden;

	& > div {
		display: flex;
		margin: auto 0;
	}
`;

export const CreatedByMe = styled.span`
	font-size: .5rem;
	bottom: 4rem;
	opacity: .4;
	text-align: center;
	margin-top: auto;
	margin-bottom: 4rem;

	@media (min-width: 640px) {
		margin-bottom: 0rem;
	}
`;
