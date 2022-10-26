import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Joyful FM Radio",
            artist: "JoyfulFMRadio",
            cover: "https://img.freepik.com/foto-gratis/boton-volumen-estereo-musical-objeto_1172-501.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://c15.radioboss.fm:8218/stream",
            active: true,
        },
        {
            name:"Premier gospel",
            artist: "Premiergospel",
            cover: "https://img.freepik.com/vector-gratis/banner-radio-musica-vivo_1419-1987.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://audio-edge-es6pf.mia.g.radiomast.io/31ecbab9-e64f-44a3-8afa-fe58745e82c8",
            active: false,
        },
        {
            name:"Joy Gospel",
            artist: "JoyGospel",
            cover: "https://img.freepik.com/vector-gratis/plantilla-logotipo-podcast-detallada_23-2148786066.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://servidor17.brlogic.com:7012/live",
            active: false,
        },
        {
            name:"Hope Fm",
            artist: "HopeFm",
            cover: "https://img.freepik.com/vector-gratis/microfono-auriculares-retro-imagen-realista_1284-14415.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://stream1.tune-in.co.uk/proxy/hopefm?mp=/stream",
            active: false,
        },
        {
            name:"Sky 99.5",
            artist: "Sky99.5",
            cover: "https://img.freepik.com/vector-gratis/reproductores-cintas-cassette_1045-173.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://audio-edge-vqwx4.yyz.g.radiomast.io/efe56859-e3cb-4563-8e94-0320488b7cbd",
            active: false,
        },
        {
            name:"Love 101",
            artist: "Love101",
            cover: "https://img.freepik.com/vector-gratis/conjunto-logotipos-detallados-podcast_23-2148794979.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://stream-34.zeno.fm/y6g5utrtpy5tv?zs=wmcPkTQ9SYW-OJ4tL0yYpw",
            active: false,
        },
        {
            name:"BOX Gospel Plus",
            artist: "BOXGospelPlus",
            cover: "https://img.freepik.com/vector-gratis/logotipo-podcast-detallado-auriculares_23-2148788671.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://boxradio-edge-07.streamafrica.net/gospelplus",
            active: false,
        },
        {
            name:"BOX Gospel Plus",
            artist: "BOXGospelPlus",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41312.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://boxradio-edge-07.streamafrica.net/gospelplus",
            active: false,
        },
        {
            name:"Full adventista radio",
            artist: "Fulladventistaradio",
            cover: "https://img.freepik.com/vector-gratis/radio-clasica-retro-marron-altavoz-sintonizador-sonido_1284-14081.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://server2.ejeserver.com:8457/stream",
            active: false,
        },
    ];
}

export default chillHop;


