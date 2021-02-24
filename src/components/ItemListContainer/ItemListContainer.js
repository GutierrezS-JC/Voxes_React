import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Container, Button, Row, Col } from 'react-bootstrap';
import { SpinnerLoading } from '../Spinner/Spinner';
import { ItemList } from '../ItemList/ItemList';
import { getFirestore } from '../../firebase';
import { Banner } from '../Banner/Banner';
import Empty from '../../img/Empty.svg';

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
                        <Row>
                            <Col className="col-12 col-md-6 ">
                                <h1 className="">Oops...</h1>
                                <p>No pudimos encontrar resultados para <b>{searchQ}</b></p>
                                <div className="d-md-block d-none">
                                    <p className="mt-5">Nuestro buscador esta en fase beta. <br /><small> <b>( Si... por aca tambien extrañamos SQL ). </b></small></p>
                                    <p>Sugerimos que realice nuevamente la busqueda o, si desea volver a ver todos los productos que ofrecemos,
                                    puede hacer click en el boton a continuacion.
                                </p>
                                    <Button variant="dark" as={Link} to={`/`} onClick={() => { setNotFound(false) }}>
                                        Ver productos
                            </Button>
                                </div>

                            </Col>
                            <Col className="col-12 col-md-6 mt-3">
                                <img alt="notFound" className="img-fluid-max" style={{ maxWidth: "100%", height: "auto" }} src={Empty} />
                            </Col>
                        </Row>
                        <Row className="d-block d-md-none">
                            <Col className="mt-5">
                                <p>Nuestro buscador esta en fase beta. <br /><small> <b>( Si... por aca tambien extrañamos SQL ). </b></small></p>
                                <p>Sugerimos que realice nuevamente la busqueda o, si desea volver a ver todos los productos que ofrecemos,
                                puede hacer click en el boton a continuacion.
                                </p>
                                <Button variant="dark" as={Link} to={`/`} onClick={() => { setNotFound(false) }}>
                                    Ver productos
                            </Button>
                            </Col>

                        </Row>
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