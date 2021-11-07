import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import { particleOptions } from './particleOptions';

import { Container, CreatedByMe } from './styles';

export function Home() {
	document.title = 'Pedro H. | Home';

	const particlesInit = (main: any) => {};

	const particlesLoaded = (container: any) => {};

	return (
		<Container>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={particleOptions}
			/>
			<div>
				<Typewriter
					options={{
						strings: ['working...', 'soon...'],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>

			<CreatedByMe>
				Pedro Henrique de Vasconcellos Almeida<br />&copy; 2021
			</CreatedByMe>
		</Container>
	);
}
