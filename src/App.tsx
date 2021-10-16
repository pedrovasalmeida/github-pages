import './styles/global.css';
import './styles/home.css';

import GitHubIcon from './assets/github.svg';
import InstagramIcon from './assets/instagram.svg';
import LinkedinIcon from './assets/linkedin.svg';

function App() {
	return (
		<div className="container">
			<span className="message">Soon...</span>

			<section className="made-by">
				<span className="powered-by">Powered by</span>
				<span className="my-name">Pedro Henrique de Vasconcellos Almeida</span>
				<span className="year-copy">2021 &copy;</span>

				<div className="icons">
					<a
						href="https://www.linkedin.com/in/pedrovasalmeida"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="icon" src={LinkedinIcon} alt="Linkedin icon" />
					</a>
					<a
						href="https://github.com/pedrovasalmeida"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="icon" src={GitHubIcon} alt="Github icon" />
					</a>
					<a
						className="last"
						href="https://instagram.com/pedroohva"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="icon" src={InstagramIcon} alt="Instagram icon" />
					</a>
				</div>
			</section>
		</div>
	);
}

export default App;
