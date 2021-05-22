import React from "react";
import Navbar from "../../components/Navbar";
import {API_URL, API_WHATSAPP_URL} from "../../config/Server"
import {useHistory} from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Fab
} from "@material-ui/core";
import PlaceIcon from "@material-ui/icons/Place";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MapIcon from "@material-ui/icons/Map";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function StoreDetails(props) {
    const history = useHistory();
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        let id = props.match.params.id;

        fetch(`${API_URL}/stores/${id}.json`)
            .then(response => response.json())
            .then(response => setData(response));
    }, []);

    const sendWhatsapp = () => {
        const message = `
============================= %0A
* Catálogo Digital * %0A
============================= %0A %0A
Olá, *${data.name}*, gostaria de mais informações a respeito desse estabelecimento.
        `;

        window.location.href = API_WHATSAPP_URL+`/send?phone=55${data.phone}&text=${message}`;
    };

    return (
        <div>
            <Navbar/>

            <div style={{padding: 15, position: 'relative'}}>
                <Button onClick={() => history.push('/lojas')} variant={"outlined"} size={"small"}>
                    <ArrowBackIcon/> Voltar
                </Button>

                <Card style={{marginTop: 10}}>
                    <CardMedia image={data.image} style={{height: 200}}/>
                    <CardContent>
                        <Typography component={"h5"} variant={"h5"}>
                            {data.name}
                        </Typography>

                        <Divider style={{margin: 10}}/>

                        <Chip icon={<ScheduleIcon/>} label={"24 horas"} color={"primary"}/>&nbsp;
                        <Chip icon={<PlaceIcon/>} label={data.region} color={"secondary"} variant={"outlined"}/>&nbsp;
                        <Chip icon={<LocalOfferIcon/>} label={data.category} color={"primary"} variant={"outlined"}/>

                        <Divider style={{margin: 10}}/>

                        <List component={"nav"}>
                            <ListItem button>
                                <ListItemIcon><MapIcon/></ListItemIcon>
                                <ListItemText primary={data.address}/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><EmailIcon/></ListItemIcon>
                                <ListItemText primary={data.email}/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><PhoneIcon/></ListItemIcon>
                                <ListItemText primary={data.phone}/>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

                <Fab onClick={sendWhatsapp} style={{right: 20, bottom: 20, position: 'fixed', backgroundColor: '#128c7e'}} color={"primary"} aria-label={"whatsapp"}>
                    <PhoneIcon/>
                </Fab>
            </div>
        </div>
    );
}