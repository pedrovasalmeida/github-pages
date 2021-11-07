import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	0%{
		box-shadow: 0 8px 42px 4px rgba(31, 38, 135, 0.4);
	}
	50%{
		box-shadow: 0 8px 42px 8px rgba(31, 38, 135, 1);
	}
	100%{
		box-shadow: 0 8px 42px 4px rgba(31, 38, 135, 0.4);
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;

	width: 336px;
	height: 40px;

	position: absolute;
	right: 0;
	bottom: 0;

	background: rgba(8, 8, 16, 0.35);

	box-shadow: 0 8px 40px 4px rgba(31, 38, 135, 0.7);
	backdrop-filter: blur(3.5px);
	-webkit-backdrop-filter: blur(3.5px);

	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	border-right: 0;
	border-bottom: 0;
	border-top-left-radius: 999px;

	animation: ${pulse} 5s infinite linear;
	transition: all 600ms ease;

	&:hover {
		box-shadow: 0 8px 40px 8px rgba(31, 38, 135, 1);
		background: rgba(8, 8, 16, 0.65);
	}

	& > div {
		position: absolute;
		right: 0;

		width: 7rem;
		height: 1px;

		border-radius: 9999px;
		background: #fff;
		filter: contrast(0);
		opacity: 0.6;
	}

	& > img {
		width: 1.25rem;
		height: 1.25rem;
		margin-left: 2.75rem;
		opacity: 1;
		filter: contrast(0);
		cursor: pointer;

		transition: filter 600ms ease, transform 200ms ease;

		&:hover {
			transform: translateY(-2px);
		}

		&:hover {
			filter: contrast(2);
		}
	}
`;
