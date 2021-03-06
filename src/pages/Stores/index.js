import React from "react";
import Navbar from "../../components/Navbar";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Chip,
    Divider,
    TextField,
    InputAdornment
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useHistory} from "react-router-dom";
import {API_URL} from "../../config/Server";

export default function Stores(props) {
    const [storeList, setStoreList] = React.useState([]);
    const [filteredStoreList, setFilteredStoreList] = React.useState([]);
    const history = useHistory();
    const region = props.match.params.region;
    const category = props.match.params.category;

    React.useEffect(() => {
        fetch(API_URL+'/stores.json')
            .then(response => response.json())
            .then(response => {
                let data = [];

                for (let id in response) {
                    response[id].id = id; //recuperando o id de cada loja

                    if (!category && !region) {
                        data.push(response[id]); //adicionando cada loja ao array data.
                        continue;
                    }

                    if (category && response[id].category === category) {
                        data.push(response[id]);
                        continue;
                    }

                    if (region && response[id].region === region) {
                        data.push(response[id]);
                        continue;
                    }
                }

                setStoreList(data);
                setFilteredStoreList(data);
            });
    }, [category, region]);

    const filterStores = (event) => {
        let expression = event.target.value;

        setFilteredStoreList(
            storeList.filter(store => store.name.toLowerCase().search(expression.toLowerCase()) !== -1)
        );

        console.log(event.target.value);
    };

    return (
        <div>
            <Navbar/>

            <div style={{padding: 15}}>
                <h1>Listagem de Lojas</h1>

                <TextField
                    fullWidth
                    style={{backgroundColor: '#FFF', marginBottom: 20}}
                    label={"Busca"}
                    variant={"outlined"}
                    onChange={filterStores}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position={"start"}>
                                <SearchIcon/>
                            </InputAdornment>
                        )
                    }}
                />

                {filteredStoreList.map((store, index) => {
                    return (
                        <Card key={"store-"+store.id} style={{marginBottom: 20}} id={"store-details-".index}>
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