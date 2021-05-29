import React from "react";
import Navbar from "../../components/Navbar";
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Typography
} from "@material-ui/core";
import {API_URL} from "../../config/Server";
import {useHistory} from "react-router-dom";

export default function Regions() {
    const [regionsList, setRegionsList] = React.useState([]);
    const history = useHistory();

    React.useEffect(() => {
        fetch(API_URL+'/regions.json')
            .then(response => response.json())
            .then(response => {
                let data = [];

                for (let id in response) {
                    response[id].id = id;

                    data.push(response[id]);
                }

                setRegionsList(data);
            });
    }, []);

    return (
        <div>
            <Navbar/>

            <div style={{padding: 15}}>
                <h1>Bairros</h1>

                <Grid container spacing={2}>
                    {regionsList.map(region => {
                        return (
                            <Grid item xs={6}>
                                <Card>
                                    <CardActionArea onClick={() => history.push(`/bairros/${region.name}/lojas`)}>
                                        <CardContent>
                                            <Typography variant={"h5"} component={"h5"}>
                                                {region.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    );
}