import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { SpinnerLoading } from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NoCoincidence } from '../NoCoincidence/NoCoincidence';

import Strato1 from '../../img/Strato_1.jpg';
import Strato2 from '../../img/Strato_2.jpg';
import Strato_Japan from '../../img/Strato_Japan.jpg';
import Gibson_1 from '../../img/Gibson_LP.jpg';
import Pedal_1 from '../../img/Pedal_1.jpg';
import Pedal_2 from '../../img/Pedal_2.jpg';
import Pedal_3 from '../../img/Pedal_3.jpg';
import Pedal_4 from '../../img/Pedal_4.jpg';
import Amp_1 from '../../img/Amp_1.jpg';
import Amp_2 from '../../img/Amp_2.jpg';

const items = [
    {
        id: 1,
        category: 'guitar',
        title: "Fender Stratocaster '60 Vibe",
        description: "La Classic Vibe Stratocaster® '60 evoca una década de aventuras musicales, y al mismo tiempo incorpora algunas nuevas características. El sonido está basado en las pastillas Alnico V de bobina simple, que ofrecen un ataque rápido con mayor presencia de frecuencias medias. Los imanes escalonados ofrecen una captación de señal mejorada en cada cuerda. El mástil estilo años 60 presenta un radio moderno de 9,5” que aporta mayor comodidad y facilidad para los estiramientos de cuerdas.",
        price: "120000",
        pictureUrl: Strato1
    },
    {
        id: 2,
        category: 'amp',
        title: 'Marshall DSL40',
        description: "El DSL40TM ha sido diseñado en combinación con un altavoz de 12” Celestion G-12 v-type para tener un gran tono y versatilidad sonora. Con la posibilidad de tener dos sonidos diferentes en cada canal de ganancia, es un amplificador que se adapta a todo tipo de estilos musicales.",
        price: "119980",
        pictureUrl: Amp_2
    },
    {
        id: 3,
        category: 'guitar',
        title: 'Fender Stratocaster - American Ultra',
        description: 'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price: "309090",
        pictureUrl: Strato2
    },
    {
        id: 4,
        category: 'guitar',
        title: 'Fender Stratocaster - American Standard',
        description: 'La guitarra electrica Fender Stratocaster American Standard es un instrumento clásico elegante y a la vez asequible, que combina un diseño tradicional con especificaciones actuales. El venerado estilo de Fender y las actualizaciones modernas pueden ser compatibles y este modelo ofrece lo mejor de ambos mundos, en un instrumento ideal para guitarristas de cualquier nivel.',
        price: "242694",
        pictureUrl: Strato_Japan
    },
    {
        id: 5,
        category: 'guitar',
        title: 'Gibson Les Paul - Axcess Standard',
        description: 'LP Custom Shop representa el punto mas alto de la artesania, la calidad y la excelencia del sonido. Cada instrumento celebra el legado de Gibson a traves de la precision, la autenticidad y la atencion al detalle. La Les Paul Axcess Standard ha sido una de las guitarras favoritas de los musicos profesionales durante años, y la ultima actualizacion la hace lucir y tocar mejor que nunca. Cuenta con el nuevo cabezal Apex para mayor resistencia, contornos rediseñados para mayor comodidad y acceso al diapasón, y potentes humbuckers con rosca helicoidal para mayor versatilidad y fuerza sónica.',
        price: "615091",
        pictureUrl: Gibson_1
    },
    {
        id: 6,
        category: 'pedal',
        title: 'MXR Custom Badass Distortion M78',
        description: "El MXR Custom Badass ’78 Distortion es un pedal modificado de fábrica que ruge con grandiosos sonidos de distorsión similar a un amplificador de tubo de la vieja escuela. Tomamos un circuito de distorsión clásico y lo llevamos al siguiente nivel para obtener destacados ritmos ricos y saturados. Con sólo tres perillas, ajustar el sonido del Badass es demasiado fácil. El botón 'CRUNCH' te permite elegir entre dos modos diferentes de diodo y LED, aumentando el contenido armónico de la distorsión. El amplio sonido estilo amplificador abierto del ’78 Distortion suena genial, ya sea delante de un amplificador limpio, un amplificador ligeramente sucio o un amplificador con full overdrive. Bajo la carcasa, esta máquina de alto rendimiento cuenta con circuitería de primera clase y un hardware destinado para toda una vida de uso.",
        price: "11539",
        pictureUrl: Pedal_1
    },
    {
        id: 7,
        category: 'pedal',
        title: 'Hotone Wally Looper',
        description: "El Wally Plus fue diseñado sobre la inteligente y sencilla plataforma Wally Looper de Hotone y luego mejorado en términos de potencia, usabilidad y sofisticación. Los fans del Wally Plus apreciarán los controles de entrada y salida independientes y el exclusivo control de tiempo. Las características aumentadas incluyen una calidad de grabación/reproducción de 24 bits a 44,1 kHz, 8gb de almacenamiento interno y 11 bancos de de loop. El Wally+ tiene USB incorporado para que puedas importar/exportar con el software PC/Mac incluido.",
        price: "5668",
        pictureUrl: Pedal_2
    },
    {
        id: 8,
        category: 'pedal',
        title: 'Boss Bd-2',
        description: 'El BD-2 es un pedal que tiene el tono de blues clásico de un amplificador de tubos en un pedal compacto capaz de realizar de sonidos cálidos saturados a la distorsión total.  No emborrona tu interpretación, es capaz de respetar todos los matices que seas capaz de crear. Uno de los grandes clásicos mundiales en el terreno del overdrive. Indispensable en cualquier pedalera que se precie.',
        price: "15728",
        pictureUrl: Pedal_3
    },
    {
        id: 9,
        category: 'pedal',
        title: 'Jim Dunlop - Wah Wah Cry Baby',
        description: "Cuando la gente habla de pedales de wah-wah- están hablando de los Wah Cry Baby. Este es el que creó algunos de los sonidos más intemporales del rock. El pedal que con el tiempo se convertiría en el Cry Baby fue creado en 1966 por los ingenieros de la compañía Thomas Organ Company. Este nuevo efecto expresivo fue un éxito instantáneo con músicos como Jimi Hendrix y Eric Clapton- que han contribuido a la enorme popularidad del Wah Cry Baby. Mientras que otros efectos se han ido y venido- el Wah Cry Baby sigue mejorando con la edad.",
        price: "14684",
        pictureUrl: Pedal_4
    },
    {
        id: 10,
        category: 'amp',
        title: 'Vox Valvetronix VT20+ Classic',
        description: 'El Vox Valvetronix VT20 ofrece un sonido que supera las expectativas de su potencia nominal, a pesar de su pequeño tamaño. Ahora puedes disfrutar de todas las características sorprendentes del VT20+ en un VOX de apariencia clásica, con la rejilla tradicional en cruces. Con circuitos Tube-Driven Valve Reactor, 33 modelos de amplificador y 25 diversos efectos, este amplificador y el resto de la serie Valvetronix+ tienen mucho de lo que emocionarse.',
        price: "28435",
        pictureUrl: Amp_1
    }
];

export const ItemDetailContainer = () => {
    const [details, setDetails] = useState();
    const [spinner, setSpinner] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        console.log('Received id to: ', id);
        return () => {
            console.log('Will change id: ', id);
        }
    }, [id]);

    useEffect(() => {
        const details = new Promise((resolve, reject) => {
            const selectedId = items.find(item => item.id == id);
            setTimeout(() => {
                if (selectedId) {
                    resolve(selectedId);
                } else {
                    reject("Error en busqueda de item, ruta invalida")
                }
            }, 800)
        });

        details.then((response) => {
            setDetails(response);
        })
            .catch((err) => {
                console.log('Error: ' + err);
            })
            .finally(() => {
                setSpinner(false)
            });
    }, []);

    return (
        <Container className="mt-5">
            {spinner ? <SpinnerLoading />
                :
                details ? <ItemDetail item={details} key={details.id} />
                    : <NoCoincidence />
            }
        </Container>
    )
}