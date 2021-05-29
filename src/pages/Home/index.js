import React from "react";
import Navbar from "../../components/Navbar";
import {
    Card,
    CardContent,
    CardActionArea,
    Grid,
    Typography
} from "@material-ui/core";
import {API_URL} from "../../config/Server";
import {useHistory} from "react-router-dom";

export default function Home() {
    const [quantityStores, setQuantityStores] = React.useState(0);
    const [quantityRegions, setQuantityRegions] = React.useState(0);
    const [quantityCategories, setQuantityCategories] = React.useState(0);
    const history = useHistory();

    React.useEffect(() => {
        fetch(API_URL+'/stores.json')
            .then(response => response.json())
            .then(response => setQuantityStores(Object.keys(response).length));

        fetch(API_URL+'/regions.json')
            .then(response => response.json())
            .then(response => setQuantityRegions(Object.keys(response).length));

        fetch(API_URL+'/categories.json')
            .then(response => response.json())
            .then(response => setQuantityCategories(Object.keys(response).length));
    }, []);

    return (
        <div>
            <Navbar/>

            <div style={{padding: 10}}>
                <h1>Página Inicial</h1>

                <Card style={{marginTop: 20}}>
                    <CardActionArea onClick={() => history.push('/lojas')}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={8}>
                                    <img src="/img/stores.svg" width={"100%"} alt=""/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography align={"right"} variant={"h3"} component={"h3"}>{quantityStores}</Typography>
                                    <Typography align={"right"} variant={"h5"} component={"h5"}>Lojas</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card style={{marginTop: 20}}>
                    <CardActionArea onClick={() => history.push('/bairros')}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={8}>
                                    <img src="/img/regions.svg" width={"100%"} alt=""/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography align={"right"} variant={"h3"} component={"h3"}>{quantityRegions}</Typography>
                                    <Typography align={"right"} variant={"h5"} component={"h5"}>Regiões</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card style={{marginTop: 20}}>
                    <CardActionArea onClick={() => history.push('/categorias')}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={7}>
                                    <img src="/img/categories.svg" width={"80%"} alt=""/>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography align={"right"} variant={"h3"} component={"h3"}>{quantityCategories}</Typography>
                                    <Typography align={"right"} variant={"h5"} component={"h5"}>Categorias</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}