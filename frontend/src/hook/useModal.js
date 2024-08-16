import React, { useState } from 'react'

export function useModal(){

    const [showModal, setShowModal] = useState(false);

    const isOpenModal = () => showModal;
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return({
        isOpenModal,
        openModal,
        closeModal
    })
}