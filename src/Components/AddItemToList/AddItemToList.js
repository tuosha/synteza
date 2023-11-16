import React, {useState} from 'react'
import './AddItemToList.css'
import ModalFrame from '../ModalFrame'

const AddItemToList = ({itemLabel}) => {
    const [isModal, showModal] = useState(false);
    return (
        <div className='add-item-to-list'>
            <button className='btn btn-primary' onClick={() => showModal(true)}>
                {itemLabel}
            </button>
            <ModalFrame
                visible = {isModal}
                title = 'TITLE'
                content = 'CONTENT'
                footer = 'FOOTER'
                onClose = {() => showModal(false)}
            />
        </div>
    )
};

export default AddItemToList