import React, { useState, useEffect } from 'react';
import './Home.css';

interface minhaProps {
    title: string;
    description: string;

}

function Home(props:minhaProps){
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState ('');
    const [loggedin, setLoggedin] = useState(false);


    useEffect (() => {
        if (completed) {
            setTarefa('Parabéns! Você concluiu a tarefa!');
        }


    }, [completed])


    return (
        <>
            <div>
                <h2 className='titulo'>{props.title}</h2>
                <p className='texto'>{props.description}</p>
            </div>
            <hr/>

            <div>
                <h1 className='titulo'>Tarefa</h1>
                    <h3>{tarefa}</h3>
                    <p className='texto'>Conclua a tarefa</p>
                    <button onClick={() => setCompleted(true)}>Concluir a Tarefa</button>
            </div>
            <hr/>

            <div>
                {loggedin ? (
                    <h1>Bem vindo de volta!</h1>
                ): (
                    <button onClick={() => setLoggedin(true)}>Entrar</button>
                )
                }
            </div>
        </>
    );
}

export default Home;