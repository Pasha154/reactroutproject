import React, { useState } from "react";

const Contacts = () => {
    const [showContacts, setShowContacts] = useState(false);

    const contacts = [
        { id: 1, name: "Олександр", phone: "+380 67 123 4567" },
        { id: 2, name: "Марія", phone: "+380 50 987 6543" },
        { id: 3, name: "Іван", phone: "+380 63 543 2109" },
    ];

    const handleToggleContacts = () => {
        setShowContacts(!showContacts);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Контакти</h1>
            <button onClick={handleToggleContacts}>
                {showContacts ? "Сховати контакти" : "Показати контакти"}
            </button>
            {showContacts && (
                <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                    {contacts.map((contact) => (
                        <li key={contact.id} style={{ marginBottom: "10px" }}>
                            <strong>{contact.name}</strong>: {contact.phone}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Contacts;