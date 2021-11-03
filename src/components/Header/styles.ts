import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100vw;
	height: 64px;

	padding: 0 16px;
	background: rgba(8, 8, 16, 0.35);

	box-shadow: 0 0px 32px 2px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(3.5px);
	-webkit-backdrop-filter: blur(3.5px);

	position: fixed;
	top: 0;
`;

export const MenuBurguer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 22px;
	height: 12px;

	position: relative;

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 1px;
		width: 22px;

		background: #fff;

		position: absolute;
		left: 0;

		&:nth-child(1) {
			top: 0;
		}

		&:nth-child(2) {
			top: 4px;
		}

		&:nth-child(3) {
			top: 8px;
		}
	}
`;
