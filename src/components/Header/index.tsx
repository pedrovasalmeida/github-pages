import { useState } from 'react';

import { BiHomeAlt, BiMale, BiWater } from 'react-icons/bi';

import { Container, MenuBurguer, HoverFloatMenu } from './styles';

export function Header() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Container>
			<HoverFloatMenu
				isHovered={isHovered}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => setIsHovered(false)}
			>
				<h3>Projetos:</h3>
				<span>&nbsp;</span>
				<li>Projeto 1</li>
				<li>Projeto 2</li>
				<li>Projeto 3</li>
				<li>Projeto 4</li>
				<li id="see-more">Ver mais</li>
			</HoverFloatMenu>
			<MenuBurguer>
				<div>
					<BiHomeAlt size={28} />
				</div>
				<div>
					<BiMale size={28} />
				</div>
				<div onMouseEnter={() => setIsHovered(true)}>
					<BiWater size={28} />
				</div>
			</MenuBurguer>
		</Container>
	);
}
