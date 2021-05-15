import "./styles.css";
import {Button, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export default function Login() {
    const history = useHistory();

    return (
        <div style={{marginLeft: '10%', width: '80%'}}>

            <div style={{marginTop: 100, marginBottom: 100}} align={"center"}>
                <span>LOGO</span>
            </div>

            <TextField fullWidth variant={"outlined"} label={"Email"} />
            <TextField fullWidth variant={"outlined"} label={"Senha"} style={{marginTop: 10, marginBottom: 20}}/>

            <div align={"center"}>
                <Button onClick={() => history.push('/')} variant={"contained"} color={"primary"}>Entrar</Button>

                <br/><br/>

                <Button variant={"text"} color={"primary"} size={"small"}>
                    Esqueci a senha
                </Button>
            </div>
        </div>
    );
}
