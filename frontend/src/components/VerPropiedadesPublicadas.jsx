import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { HOST } from '../../config';
import { useQuery } from 'react-query';

function VerPropiedadesPublicadas({showPropiedades, handleClosePropiedades}){
    const { data: misPropiedades, isLoading, refetch, isRefetching } = useQuery("MisPropiedades", obtenerMisPropiedades);

    useEffect(() => {
        refetch();
    },[refetch]);

    async function obtenerMisPropiedades() {
        try {
            const response = await fetch(`${HOST}mispropiedades`, {
                method: "GET",
                credentials: 'include',
            });
            const data = await response.json();

            if (data.success){
                return(data.propiedades);
            }else{
                return [];
            }
        } catch (error) {
            throw new Error("OCURRIO UN ERROR");
        }
    }

    return(
        <>
            <Modal show={showPropiedades} size="xl" onHide={handleClosePropiedades} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>MIS PROPIEDADES</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default VerPropiedadesPublicadas;