import styled, { keyframes } from 'styled-components';

const FooterPulse = keyframes`
	0% {
		box-shadow: 0 8px 40px 4px rgba(31, 38, 135, 0.2);
	}

	50% {
		box-shadow: 0 8px 40px 8px rgba(31, 38, 135, 1);
	}


 100% {
		box-shadow: 0 8px 40px 8px rgba(31, 38, 135, 0.2);
	}
`;

const FooterHover = keyframes`
	0% {
		box-shadow: 0 8px 40px 4px rgba(31, 38, 135, 0.2);
	}

	100% {
		box-shadow: 0 8px 40px 8px rgba(31, 38, 135, 1);
	}
`;

export const FloatSocialBar = styled.div`
	display: flex;
	align-items: center;

	width: 336px;
	height: 40px;

	position: fixed;
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

	transition: all 600ms ease;

	animation: ${FooterPulse} 5000ms ease infinite;

	&:hover {
		box-shadow: 0 8px 40px 8px rgba(31, 38, 135, 1);
		background: rgba(8, 8, 16, 0.65);

		border: 1px solid rgba(255, 255, 255, 0.2);
		border-bottom: 0;
		border-right: 0;

		animation: ${FooterHover} 1000ms ease forwards;

		transition: all 600ms ease;
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
		width: 1.125rem;
		height: 1.125rem;
		margin-left: 2.75rem;
		opacity: 0.6;
		filter: contrast(0);
		cursor: pointer;

		transition: filter 600ms ease, transform 200ms ease, opacity 600ms ease;

		&:hover {
			transform: translateY(-2px);
		}

		&:hover:first-child {
			opacity: 1;
		}

		&:hover:not(:first-child) {
			filter: contrast(2);
		}
	}
`;
