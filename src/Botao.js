import React from 'react'
import './Cronometro.css';

const Botao = (props) => (
    <button class="btn " onClick={props.onClick}>{props.label}</button>
)

export default Botao