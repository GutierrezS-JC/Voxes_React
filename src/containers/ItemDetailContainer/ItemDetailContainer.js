import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { SpinnerLoading } from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { NoCoincidence } from '../../components/NoCoincidence/NoCoincidence';
import { getFirestore } from '../../firebase'

export const ItemDetailContainer = () => {
    const [details, setDetails] = useState();
    const [spinner, setSpinner] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsDb = db.collection('items');
        const itemDb = itemsDb.doc(id);
        itemDb.get().then((doc) => {
            if (!doc.exists) {
                console.log('No existe el documento');
                return;
            }
            setDetails({ id: doc.id, ...doc.data() });
        }).catch((e) => {
            console.log(`Ocurrio un error: ${e}`);
        }).finally(() => {
            setSpinner(false);
        });
    }, [id]);

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