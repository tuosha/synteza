import React, {useEffect} from 'react'
import './ModalFrame.css'

const ModalFrame = ({visible, title, content, footer, onClose} = defaultCustoms) => {
    const keyType = (e) => {
        switch (e.key) {
            case 'Escape': onClose(); console.log(e.key); break;
        }
    };
    useEffect(() => {
        document.addEventListener('onkeydown', keyType);
        return () => document.removeEventListener('onkeydown', keyType);
    });

    if (!visible) return null;
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3 className='modal-title'>{title}</h3>
                    <span className='modal-close' onClick={onClose}>
            &times;
          </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>{content}</div>
                </div>
                {footer && <div className='modal-footer'>{footer}</div>}
            </div>
        </div>
    )
};

const defaultCustoms = {
    visible: false,
    title: '',
    content: '',
    footer: '',
    onClose: () => {}
};

export default ModalFrame