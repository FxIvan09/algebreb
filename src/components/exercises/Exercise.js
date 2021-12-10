import 'katex/dist/katex.min.css';
/* import { useState } from 'react'; */
import { InlineMath } from 'react-katex';

const Exercise = ({ exercise, index, tipoRespuesta, numberExercises }) => {
	/* const [isSolToggle, setIsSolToggle] = useState(false) */
	const numberClass = "col-md-" + numberExercises + " p-2";

	return (
		<div className={numberClass}>
			{exercise.enunciado && 
				(<span><b>{index})</b> <InlineMath math={exercise.enunciado} /></span>) 
			}

			<ol type='a'>
			{ tipoRespuesta === "opcion_multiple" && exercise.respuestas && exercise.respuestas.map(
					(respuesta, index) => (
							<li className='fw-lighter' style={{color: "#393E46"}} key={index}> 
								<InlineMath math={respuesta} /> 
							</li>
					))
			}
			</ol>

		</div>
	)
}

export default Exercise
