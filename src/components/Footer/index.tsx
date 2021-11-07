import { Container } from './styles';

import GitHubIcon from '../../assets/github.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

export function Footer() {
	function redirectClickTo(url: string) {
		window.open(url);
	}

	return (
		<Container>
			<img
				src={LinkedinIcon}
				alt="Linkedin Icon"
				onClick={() => redirectClickTo('https://linkedin.com/in/pedrovasalmeida')}
			/>
			<img
				src={GitHubIcon}
				alt="GitHub Icon"
				onClick={() => redirectClickTo('https://github.com/pedrovasalmeida')}
			/>
			<img
				src={InstagramIcon}
				alt="Instagram Icon"
				onClick={() => redirectClickTo('https://www.instagram.com/pedroohva/')}
			/>

			<div />
		</Container>
	);
}
