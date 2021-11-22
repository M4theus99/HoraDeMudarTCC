import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Link } from 'react-router-dom';
import { Container } from "./styled";



const loader = new Loader({
    apiKey: "AIzaSyDOQ1P-nh88fs2TnDf4SUCcFvXnoxcDLVg",
    version: "weekly",
    libraries: ["places"]
});



export default class DemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
   

    componentDidMount() {
        let self = this;
        const mapOptions = {
            center: {
                lat: -23.680391350480708,
                lng: -46.70799817891052
            },
            zoom: 15,

            styles: [
                {
                  "featureType": "administrative",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "saturation": 100
                    }
                  ]
                }
              ]
        
        };
        
        

        loader.load().then((google) => {
            const map = new google.maps.Map(self.googleMapDiv, mapOptions);
            this.setState({
                google: google,
                map: map
            });

            new google.maps.Marker({
                position: new google.maps.LatLng(-23.680391350480708, -46.70799817891052),
                map: map,
                icon: {
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  labelOrigin: new google.maps.Point(75, 32),
                  size: new google.maps.Size(32,32),
                  anchor: new google.maps.Point(16,32)
                },
                label: {
                  text: "Você está aqui!",
                  color: "#black",
                  fontWeight: "bold"
                },
            });


                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.67912442839391, -46.712606561895086),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "Decap Departamento de Polícia Judiciária da Capital",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });

                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.676096345007487, -46.71208132805721),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "Delegacia Policia Civil",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });

                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.68082090522108, -46.6807509050291),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "22º batalhão de policia",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });

                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.66042106291893, -46.68706281832356),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "99º Distrito Policial - Campo Grande",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });

                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.645410972339725, -46.707333766338415),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "11º Distrito Policial - Santo Amaro",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });

                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.660865780092344, -46.75710075984275),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "92º Distrito Policial - Parque Santo Antonio",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });

                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.690880690362064, -46.75940703529528),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "Delegacia Geral Da Policia",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });
                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.71097690540379, -46.69599180697031),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "48º Distrito Policial - Cidade Dutra",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });
                  new google.maps.Marker({
                    position: new google.maps.LatLng(-23.69738700295106, -46.715781247878525),
                    map: map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        labelOrigin: new google.maps.Point(75, 32),
                        size: new google.maps.Size(32,32),
                        anchor: new google.maps.Point(16,32)
                      },
                      label: {
                        text: "Decap-Departamento de Polícia Judiciária da Capital",
                        color: "#black",
                        fontWeight: "bold",
                        fontSize: "10px"
                      },
                  });
        });
    }

    render() {
        return (
            <Container>
                    <div class="site"> 
            <div class="container">

            <div class="cabecalho-inicio">

<div class="cabecalho-img">
    <Link to="/">
    <img src="/assets/imagens/logo-claro.png" alt=""/>
    </Link>
</div>


<div class="cabecalho-botoes">
 
   <Link to="/">Inicio</Link> 
     <Link to="/Denúncia">Denúncia</Link>
     <Link to="/TipoViolencia">Tipos de violência</Link>
     <Link to=" ">Tipos de assédio</Link>
    
     <Link to="/AutoEstima">Autoestima</Link>
     <Link to="/Chat">Chat</Link>
     <Link to="/Cadastro">Cadastro</Link>
     <Link to="/Login">Login</Link>
                                   
</div>

</div>

                <div class="conteudo">
                    <div class="text">Localize a delegacia mais próxima:</div>
                   {/* <div class= "searchbox" />
                        <div class="research"> <img src="/assets/imagens/pg-mapa-research.png" widht="48.84" height="56.23"/> </div>
                       <i class="fa fa-search" aria-hidden="true"></i>
                       <input type="text" name="" placeholder="Type Here"/> */}
                     </div>
                     
                     <div class = "mapa"
                ref={(ref) => { this.googleMapDiv = ref }}
                style={{ height: '60vh', width: '60%', }}>
            </div>
                </div>
                
                <div class="conteudo2">
                    
                <div class="conteudoimg">
                
                <div class="mulher"><img src="/assets/imagens/pg-mapa-mulher.png" widht="450px" height="450px" alt=""/></div>
            </div>
            
                <div class="textos">
                <ScrollAnimation animateIn="animate__bounceInLeft">
                    <div class="text2"> Denúncie Conosco</div>
                    
                    <div class="text3"> Nós da Hora De Mudar incetivamos você a fazer uma denúncia!</div>
                    
                    <div class="text4"> Clique aqui para ser redicionada ao nosso chat de denúncias</div>
                    <div class="config">
                    <button class="btn2"> <Link to= "/ChatDenuncia"> Chat </Link> </button>
                   </div>
                </ScrollAnimation>
                </div>
                
                     </div>
                    </div> 
        </Container>
        )
     }
}