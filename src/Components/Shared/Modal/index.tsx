/* eslint-disable */
import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ open, children, onClose, title }: { open: boolean, children: any, onClose: () => void, title: string }) {
    if (!open) return null

    return createPortal(
        <>
            <div className='modal_overlay' />
            <div className={'modal_content'}>
                <div className="modal_header">
                    <h4 className='title ml-4'>{title}</h4>
                    <button className="close btn-outlined" onClick={onClose}>X</button>
                </div>
                {children}
            </div>
        </>,
        document.getElementById('overlays') as HTMLElement
    )
}