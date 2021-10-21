import Typewriter from 'typewriter-effect';

import { Container, CreatedByMe } from './styles';

export function Home() {
	return (
		<Container>
			<Typewriter
				options={{
					strings: [ 'working...', 'soon...' ],
					autoStart: true,
					loop: true,
					deleteSpeed: 300,
				}}
			/>

			<CreatedByMe>
				Pedro Henrique de Vasconcellos Almeida
				<p>
					&copy;
					<Typewriter
						options={{
							strings: [ ' 2021' ],
							autoStart: true,
							loop: true,
							delay: 200,
							deleteSpeed: 400,
						}}
					/>
				</p>
			</CreatedByMe>
		</Container>
	);
}
