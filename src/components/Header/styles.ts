import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: .5rem 0;
	position: relative;

	@media (min-width: 640px) {
		pointer-events: none;
		display: none;
	}
`;

interface MenuBurguerProps {
	isHovered: boolean;
}

export const MenuBurguer = styled.div<MenuBurguerProps>`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background: purple;
	width: 100%;

	margin: 0 auto;
	background: transparent;

	transition: all 600ms ease;

	& > div {
		display: flex;
		border-radius: 50%;
		padding: 8px;
		cursor: pointer;

		transition: all 600ms ease;

		&:hover {
			background: rgba(255, 255, 255, 0.05);
		}
	}

	& > div > svg {
		cursor: pointer;
		color: ${props => props.theme.colors.white};
	}
`;

export const HoverFloatMenu = styled.ul<MenuBurguerProps>`
		display: flex;
		flex-direction: column;
		
		position: absolute;
		left: 0;
		bottom: -200px;

		content: '';

		width: 100%;
		min-height: 224px;
		/* min-height: ${props => props.isHovered ? '224px' : '20px'}; */
		
		padding: 1rem 1rem 0;
		list-style: none;

		background: #E2E8F0;
		color: ${props => props.theme.colors.black};
		opacity: ${props => props.isHovered ? '1' : '0'};
		transform: translateY(${props => props.isHovered ? '40px' : '0'});
		box-shadow: 0 40px 64px 8px rgba(31, 38, 135, 0.7);

		border-radius: ${props => props.isHovered ? '1.5rem' : '50%'};
		border-top-left-radius: 0;
		border-top-right-radius: 0;

		pointer-events: ${props => props.isHovered ? 'all' : 'none'};
		transition: all 600ms 100ms ease;
		z-index: 2;
		overflow: hidden;

		& > p {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 180px;
			margin: auto auto 0;
			text-align: center;
			font-size: 14px;
			padding: 4px 0;
			font-weight: bold;
			border-bottom: 2px solid ${props => props.theme.colors.black};
		}

		& > li {
			font-weight: 500;
			cursor: pointer;

			&:not(:first-child) {
				padding-top: .5rem;
			}

			&#see-more {
				text-align: center;
			}
		}
`;