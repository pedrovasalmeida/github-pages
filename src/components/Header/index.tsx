import { useState } from 'react';

import { BiHomeAlt, BiMale, BiWater } from 'react-icons/bi';

import { Container, MenuBurguer, HoverFloatMenu } from './styles';

export function Header() {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	return (
		<Container>
			<HoverFloatMenu isHovered={isMenuOpened} onClick={() => setIsMenuOpened(false)}>
				<h3>Projetos</h3>
				<span>&nbsp;</span>
				<li>Em breve...</li>

				<p id="see-more">Ver todos os projetos</p>
			</HoverFloatMenu>
			<MenuBurguer isHovered={isMenuOpened}>
				<div>
					<BiHomeAlt size={28} />
				</div>
				<div>
					<BiMale size={28} />
				</div>
				<div onClick={() => setIsMenuOpened((prev) => !prev)}>
					<BiWater size={28} />
				</div>
			</MenuBurguer>
		</Container>
	);
}
