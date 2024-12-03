import React, { useState } from 'react';
import { db } from './Firebase';
import { collection, addDoc } from 'firebase/firestore';

function Criar(props) {
    const [Subject, setSubject] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Subject !== "") {
            await addDoc(collection(db, "todos"), {
                Subject,
                completed: false,
            });
            setSubject("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="text"
                    placeholder='Adicionar um Personagem'
                    value={Subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div className="btn-container">
                <button>Adicionar</button>
            </div>
        </form>
    );
}
export default Criar;