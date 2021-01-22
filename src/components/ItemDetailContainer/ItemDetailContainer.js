import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { SpinnerLoading } from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

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
        price: "120.000",
        pictureUrl: Strato1
    },
    {
        id: 2,
        category: 'amp',
        title: 'Marshall DSL40',
        description: "El DSL40TM ha sido diseñado en combinación con un altavoz de 12” Celestion G-12 v-type para tener un gran tono y versatilidad sonora. Con la posibilidad de tener dos sonidos diferentes en cada canal de ganancia, es un amplificador que se adapta a todo tipo de estilos musicales.",
        price: "119.980",
        pictureUrl: Amp_2
    },
    {
        id: 3,
        category: 'guitar',
        title: 'Fender Stratocaster - American Ultra',
        description: 'La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.',
        price: "309.090",
        pictureUrl: Strato2
    },
    {
        id: 4,
        category: 'guitar',
        title: 'Fender Stratocaster - American Standard',
        description: 'La guitarra electrica Fender Stratocaster American Standard es un instrumento clásico elegante y a la vez asequible, que combina un diseño tradicional con especificaciones actuales. El venerado estilo de Fender y las actualizaciones modernas pueden ser compatibles y este modelo ofrece lo mejor de ambos mundos, en un instrumento ideal para guitarristas de cualquier nivel.',
        price: "242.694",
        pictureUrl: Strato_Japan
    },
    {
        id: 5,
        category: 'guitar',
        title: 'Gibson Les Paul',
        description: 'A guitar',
        price: "615.091",
        pictureUrl: Gibson_1
    },
    {
        id: 6,
        category: 'pedal',
        title: 'MXR Custom Badass Distortion M78',
        description: 'A pedal',
        price: "11.539",
        pictureUrl: Pedal_1
    },
    {
        id: 7,
        category: 'pedal',
        title: 'Hotone Wally Looper',
        description: 'A pedal',
        price: "5.668",
        pictureUrl: Pedal_2
    },
    {
        id: 8,
        category: 'pedal',
        title: 'Boss Bd-2',
        description: 'A pedal',
        price: "15.728",
        pictureUrl: Pedal_3
    },
    {
        id: 9,
        category: 'pedal',
        title: 'Jim Dunlop - Wah Wah Cry Baby',
        description: 'What a pedal',
        price: "14.684",
        pictureUrl: Pedal_4
    },
    {
        id: 10,
        category: 'amp',
        title: 'Vox Valvetronix VT20+ Classic',
        description: 'An amp',
        price: "28.435",
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
                resolve(selectedId);
            }, 2000)
        });

        details.then((response) => {
            setDetails(response);
        })
            .finally(() => {
                setSpinner(false)
            });
    }, []);

    return (
        <Container className="mt-5">
            {spinner ? <SpinnerLoading />
                :
                <React.Fragment>
                    < ItemDetail item={details} key={details.id} />
                </React.Fragment>
            }
        </Container>
    )
}