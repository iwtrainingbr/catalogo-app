import {useState} from "react";

export default function Counter() {
    const [numero, setNumero] = useState(0);

    const addNumero = () => {
        setNumero(numero+1);
    };

    const removerNumero = () => {
        if (numero <= 0) {
            return;
        }

        setNumero(numero-1);
    };

    return (
        <div>
            <button onClick={removerNumero}>-</button>
            {numero}
            <button onClick={addNumero}>+</button>
        </div>
    )
}