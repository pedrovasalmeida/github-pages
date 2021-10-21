import styled from 'styled-components';

import { ThemeProps } from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100vw;
	max-width: 1400px;
	height: ${({ theme }: ThemeProps) => theme.height};

	background: radial-gradient(
		circle at center,
		rgba(31, 38, 135, 0.2) 0,
		rgba(0, 0, 0, 0.2) 100%
	);

	padding: 0 16px;
	margin: 0 auto;
`;

export const CreatedByMe = styled.span`
	font-size: .5rem;
	position: absolute;
	bottom: 4rem;
	opacity: .4;
	text-align: center;
	pointer-events: none;

	@media (min-width: 1100px) {
		bottom: 1rem;
	}

	> p {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
