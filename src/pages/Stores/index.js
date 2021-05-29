import React from "react";
import Navbar from "../../components/Navbar";
import {Card, CardContent, CardActionArea, CardMedia, Typography, Chip, Divider} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {API_URL} from "../../config/Server";

export default function Stores() {
    const [storeList, setStoreList] = React.useState([]);
    const history = useHistory();

    React.useEffect(() => {
        fetch(API_URL+'/stores.json')
            .then(response => response.json())
            .then(response => {
                let data = [];

                for (let id in response) {
                    response[id].id = id; //recuperando o id de cada loja

                    data.push(response[id]); //adicionando cada loja ao array data.
                }

                setStoreList(data);
            });
    }, []);

    return (
        <div>
            <Navbar/>

            <div style={{padding: 15}}>
                <h1>Listagem de Lojas</h1>

                {storeList.map(store => {
                    return (
                        <Card style={{marginBottom: 20}}>
                            <CardActionArea onClick={() => history.push('/lojas/'+store.id)}>
                                <CardMedia style={{height: 200}} image={store.image} title={"Titulo da Loja"}/>
                                <CardContent>
                                    <Typography variant={"h5"} component={"h2"}>
                                        {store.name}
                                    </Typography>

                                    <Typography component={"p"} color={"textSecondary"}>
                                        {store.address}
                                    </Typography>

                                    <Divider style={{marginTop: 20, marginBottom: 20}}/>

                                    <Chip variant={"outlined"} color={"primary"} label={"Aberto agora"}/>&nbsp;
                                    <Chip variant={"outlined"} color={"secondary"} label={"Fecha em breve"}/>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}