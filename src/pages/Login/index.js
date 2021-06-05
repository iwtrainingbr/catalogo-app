import "./styles.css";
import {Button, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export default function Login() {
    const history = useHistory();

    return (
        <div style={{marginLeft: '10%', width: '80%'}}>

            <div style={{marginTop: 100, marginBottom: 70}} align={"center"}>
                <img width={"80%"} src={"/img/catalogo-digital-white.png"}/>
            </div>

            <h2>Login</h2>
            <TextField data-cy={"email"} fullWidth variant={"outlined"} label={"Email"} />
            <TextField data-cy={"senha"} type={"password"} fullWidth variant={"outlined"} label={"Senha"} style={{marginTop: 10, marginBottom: 20}}/>

            <div align={"center"}>
                <Button data-cy={"submit"} onClick={() => history.push('/')} variant={"contained"} color={"primary"}>Entrar</Button>

                <br/><br/>

                <Button variant={"text"} color={"primary"} size={"small"}>
                    Esqueci a senha
                </Button>
            </div>
        </div>
    );
}
