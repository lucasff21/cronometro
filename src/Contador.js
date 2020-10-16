import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'
import './Cronometro.css';



class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            centesimos: 0,
            stop: false,
            nameStop: "Stop",
            parcial: "",
            horas: 0
            
        }
    }

    zerarCronometro(){
        this.setState({
            segundos: -0, 
            minutos: 0,
            centesimos: 0,
            horas: 0,
            
        })
    }
    parciais(){
        let p =this.state.horas+ ":"+ this.state.minutos + ":" + this.state.segundos + ":"+this.state.centesimos + "\n\n"
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
                    if (state.centesimos >= 100){

                        this.incrementarCentesimos()

                        if (state.minutos >= 59){
                            this.incrementarHoras()
                            return
                        }

                        if (state.segundos >= 59){
                           this.incrementarMinutos()
                           return;
                        }

                        this.incrementarSegundos()
                    }

                    return({centesimos: state.centesimos + 1})
                }
            }
        )

    }

    
    incrementarHoras(){
        this.setState({horas: this.state.horas + 1, minutos: 0})
    }

    incrementarSegundos(){
        this.setState({segundos: this.state.segundos + 1})
    }

    incrementarMinutos(){
        this.setState({minutos: this.state.minutos + 1, segundos: 0})
    }
    
    incrementarCentesimos(){
        this.setState({centesimos: 0})
    }
   
       
    componentDidMount(){
        this.timer = setInterval( () => this.incrementar(), 10)
      
    }

    mostrarTimeComZeros(value)
    {
        return new String("00" + value).slice(-2);
    }
    

    render(){
        return(
            <div>
                <h1 class ="mostrar">{this.mostrarTimeComZeros(this.state.horas)}:{this.mostrarTimeComZeros(this.state.minutos)}:{this.mostrarTimeComZeros(this.state.segundos)}:{this.state.centesimos}</h1>
                <Botao class="" onClick={() => {this.zerarCronometro()}} label="Zerar" />
                <Botao onClick={() => {this.pararTempo()}} label={this.state.nameStop} />
                <Botao onClick={() => {this.parciais()}} label= "Parcial" />
                <LabelCronometro name={this.state.parcial}/>

            </div>
        )
    }
}

export default Contador



    



