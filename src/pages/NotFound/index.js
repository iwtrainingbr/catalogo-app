import "./styles.css";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export default function NotFound() {
    const history = useHistory();

    return (
        <div className={"page-not-found"}>
            <h2>Ops, pagina não encontrada.</h2>

            <img src={"/img/not_found.svg"} width={"100%"}/>

            <Button onClick={() => history.push('/')} variant={"outlined"} color={"primary"}>
                Voltar pra página inicial
            </Button>
        </div>
    );
}