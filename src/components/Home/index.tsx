import GitHubIcon from '../../assets/github.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

import Typewriter from 'typewriter-effect';

import { Container, FloatSocialBar, MainContent } from './styles';

export function Home() {
	function redirectClickTo(url: string) {
		window.open(url);
	}

	return (
		<Container>
			<FloatSocialBar>
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
				<img
					src={LinkedinIcon}
					alt="Linkedin Icon"
					onClick={() => redirectClickTo('https://linkedin.com/in/pedrovasalmeida')}
				/>
				<div />
			</FloatSocialBar>

			<MainContent>
				<Typewriter
					options={{
						strings: [ 'working...', 'soon...' ],
						autoStart: true,
						loop: true,
					}}
				/>
			</MainContent>
		</Container>
	);
}
