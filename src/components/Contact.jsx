import React from 'react';
import { contact } from '../data/contact';

const Contact = () => {

    const ContactsItemsUi = contact.map((item, index) => <li key={index}>
        <a rel="noreferrer" target="_blank" href={item.link} title={item.name}>
            <img src={item.icon} className="contact__img" alt={item.name} />
        </a>
    </li>);

    return (
        <div className="contact">
            <h1>Get in Touch</h1>
            <ul className="contact__list">
                {ContactsItemsUi}
            </ul>
        </div>
    )
}
export default Contact;