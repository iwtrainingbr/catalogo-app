export default function Login() {
    let nome = 'Alessandro';

    const teste = () => {
        alert('Click');
    };

    return (
        <div>
            <h1>Página de Login</h1>
            <h2>{nome}</h2>

            <button onClick={teste}>
                Clique aqui
            </button>
        </div>
    );
}
