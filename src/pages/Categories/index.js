import React from "react";
import Navbar from "../../components/Navbar";
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import {API_URL} from "../../config/Server";

export default function Categories() {
    const [categoriesList, setCategoriesList] = React.useState([]);

    React.useEffect(() => {
        fetch(API_URL+'/categories.json')
            .then(response => response.json())
            .then(response => {
                let data = [];

                for (let id in response) {
                    response[id].id = id;

                    data.push(response[id]);
                }

                setCategoriesList(data);
            });
    }, []);

    return (
        <div>
            <Navbar/>

            <div style={{padding: 15}}>
                <h1>Categorias</h1>

                <Grid container spacing={2}>
                    {categoriesList.map(category => {
                        return (
                            <Grid item xs={6}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia style={{height: 100}} image={category.image}/>

                                        <CardContent>
                                            <Typography variant={"h5"} component={"h5"}>
                                                {category.name}
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