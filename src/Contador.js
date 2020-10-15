import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'


class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            milesegundos: 0,
            stop: false,
            nameStop: "Stop",
            parcial: ""
            
        }
    }

    

    zerarCronometro(){
        this.setState({
            segundos: -1, 
            minutos: 0,
            milesegundos: 0
        })
    }
    parciais(){
        let p = this.state.minutos + ":" + this.state.segundos + ":"+this.state.milesegundos + "\n\n"
        this.setState({
            parcial: this.state.parcial + "->" + p 
        })
        
    }

    pararTempo(){
        this.setState({
            stop: !this.state.stop
        })
        if(this.state.stop)
            {this.setState({
                nameStop: "Stop"
            })}
        else
            {this.setState({
                nameStop: "Play"
            })}
    }


  incrementar(){
        this.setState(
            (state) => {
                if(this.state.stop==false){
                    if (state.milesegundos >= 5){
                        this.zerar()
                        this.incrementarMinutos()
                        this.incrementarMilesegundos()
                    }
                  
                    return({milesegundos: state.milesegundos + 1})
                }
            }
        )
    }



    zerar(){
        this.setState({segundos: 0})
    }

    incrementarMinutos(){
        this.setState({minutos: 0})
    }
    
    incrementarMilesegundos(){
        this.setState({milesegundos: this.state.milesegundos + 1})
    }
   
    componentDidMount(){
        this.timer = setInterval( () => this.incrementar(), 1000)
    }
  

    render(){
        return(
            <div>
            <h1>{this.state.minutos}:{this.state.segundos}:{this.state.milesegundos}</h1>
            <Botao onClick={() => {this.zerarCronometro()}} label="Zerar" />
            <Botao onClick={() => {this.pararTempo()}} label={this.state.nameStop} />
            <Botao onClick={() => {this.parciais()}} label= "Parcial" />
            <LabelCronometro name={this.state.parcial}/>

            </div>
        )
    }
}

export default Contador



    




