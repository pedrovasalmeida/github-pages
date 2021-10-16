import './styles/global.css';
import './styles/home.css';

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
						<img className="icon" src="./assets/linkedin.svg" alt="Linkedin icon" />
					</a>
					<a
						href="https://github.com/pedrovasalmeida"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="icon" src="./assets/github.svg" alt="Github icon" />
					</a>
					<a
						className="last"
						href="https://instagram.com/pedroohva"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="icon" src="./assets/instagram.svg" alt="Instagram icon" />
					</a>
				</div>
			</section>
		</div>
	);
}

export default App;
