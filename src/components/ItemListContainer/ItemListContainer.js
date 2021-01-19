import React, { useState, useEffect } from 'react';
import { SpinnerLoading } from '../Spinner/Spinner';
import { ItemList } from '../ItemList/ItemList';
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
        category: 'Guitar',
        title: "Fender Stratocaster '60 Vibe",
        description: 'A guitar',
        price: "120.000",
        pictureUrl: Strato1
    },
    {
        id: 2,
        category: 'Amp',
        title: 'Marshall DSL40',
        description: "An amp",
        price: "119.980",
        pictureUrl: Amp_2
    },
    {
        id: 3,
        category: 'Guitar',
        title: 'Fender Stratocaster - American Special',
        description: 'A guitar',
        price: "309.090",
        pictureUrl: Strato2
    },
    {
        id: 4,
        category: 'Guitar',
        title: 'Fender Stratocaster - American Standard',
        description: 'A guitar',
        price: "242.694",
        pictureUrl: Strato_Japan
    },
    {
        id: 5,
        category: 'Guitar',
        title: 'Gibson Les Paul',
        description: 'A guitar',
        price: "615.091",
        pictureUrl: Gibson_1
    },
    {
        id: 6,
        category: 'Pedal',
        title: 'MXR Custom Badass Distortion M78',
        description: 'A pedal',
        price: "11.539",
        pictureUrl: Pedal_1
    },
    {
        id: 7,
        category: 'Pedal',
        title: 'Hotone Wally Looper',
        description: 'A pedal',
        price: "5.668",
        pictureUrl: Pedal_2
    },
    {
        id: 8,
        category: 'Pedal',
        title: 'Boss Bd-2',
        description: 'A pedal',
        price: "15.728",
        pictureUrl: Pedal_3
    },
    {
        id: 9,
        category: 'Pedal',
        title: 'Jim Dunlop - Wah Wah Cry Baby',
        description: 'What a pedal',
        price: "14.684",
        pictureUrl: Pedal_4
    },
    {
        id: 10,
        category: 'Amp',
        title: 'Vox Valvetronix VT20+ Classic',
        description: 'An amp',
        price: "28.435",
        pictureUrl: Amp_1
    }

]

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const details = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        });

        details.then((response) => {
            setProducts(response);
        })
            .finally(() => {
                setSpinner(false)
            });
    }, []);

    return (
        <>
            {/*<Row className="align-items-center justify-content-center">
                <Col xl={3} md={4} sm={6} xs={8}>
                    <CountContainer initial={1} stock={10} />
                </Col>
                <Col xl={3} md={4} sm={6} xs={8}>
                    <CountContainer initial={1} stock={10} />
                </Col>
                <Col xl={3} md={4} sm={6} xs={8}>
                    <CountContainer initial={1} stock={10} />
                </Col>
                <Col xl={3} md={4} sm={6} xs={8}>
                    <CountContainer initial={1} stock={10} />
                </Col>
    </Row>*/}
            {spinner ? <SpinnerLoading />
                :
                <React.Fragment>
                    < ItemList items={products} /> <p className='text-center mt-5'>{greeting}</p>
                </React.Fragment>
            }
        </>
    )
}