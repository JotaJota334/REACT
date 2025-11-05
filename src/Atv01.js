import Relogio from './Relogio';
import {Link} from 'react-router-dom';

export default function Atv01() {
    return (
        <>
            <h1>ATIVIDADE 01</h1>
            <Relogio />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    )
}
