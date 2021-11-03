import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;

	position: relative;

	overflow: hidden;
`;

export const FloatSocialBar = styled.div`
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
		width: 1.125rem;
		height: 1.125rem;
		margin-left: 2.75rem;
		opacity: 0.6;
		filter: contrast(0);
		cursor: pointer;

		transition: filter 600ms ease, transform 200ms ease;

		&:hover {
			transform: translateY(-2px);
		}

		&:hover:not(:first-child) {
			filter: contrast(2);
		}
	}
`;

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	max-width: 1140px;
	margin: 0 auto;

	background: rgba(8, 8, 16, 0.65);

	width: 100%;
	height: 100%;
`;

export const CreatedByMe = styled.span`
	font-size: .5rem;
	position: absolute;
	bottom: 4rem;
	opacity: .4;
	text-align: center;

	@media (min-width: 1100px) {
		bottom: 1rem;
	}
`;
