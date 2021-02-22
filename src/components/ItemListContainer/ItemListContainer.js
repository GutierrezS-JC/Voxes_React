import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap';
import { SpinnerLoading } from '../Spinner/Spinner';
import { ItemList } from '../ItemList/ItemList';
import { getFirestore } from '../../firebase'
import { Banner } from '../Banner/Banner'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const { categoryId, searchQ } = useParams();

    useEffect(() => {
        const db = getFirestore();
        let itemCollection;
        if (searchQ) {
            itemCollection = db.collection('items').orderBy('titleSearch').startAt(searchQ.toLowerCase()).endAt(searchQ.toLowerCase() + "\uf8ff");
        }
        else if (categoryId) {
            setNotFound(false)
            itemCollection = db.collection('items').where("category", '==', categoryId);
        } else {
            itemCollection = db.collection('items');
        }

        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                setNotFound(true)
                console.log('No results');
            }
            setProducts(querySnapshot.docs.map((doc) => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            }));
        }).catch((error) => {
            setNotFound(true);
            console.log('Error searching items', error);
        }).finally(() => {
            setSpinner(false)
        });
    }, [categoryId, searchQ]);

    return (
        <>
            <Banner setNotFound={setNotFound} />
            {
                notFound ?
                    <Container>
                        < div > Not Found</div>
                        <Button as={Link} to={`/`} onClick={() => { setNotFound(false) }}>
                            Volver
                    </Button>
                    </Container>
                    :
                    <Container className="mt-4">
                        {spinner ? <SpinnerLoading />
                            :
                            <React.Fragment>
                                < ItemList items={products} /> <br />
                            </React.Fragment>
                        }

                    </Container>
            }
        </>
    )
}