import { Component } from "react"
import './HomePage.css'

class HomePage extends Component{

    render(){
        return(
            <div className="gnosoft">
                <div className="gnosoft-1">
                    <img src="http://www.systemlogicsolution.com/images/SOFTDEV1.png" id="logo"/>
                </div>
                <div className="gnosoft-2">
                    <h2 className="gnosoft-tittle">Acerca de Gnosoft</h2>
                    <h className="gnosoft-description">Somos una empresa que ofrece soluciones a medida, consultoria en TI, infraestrucutura, Soprte técnico y hosting especializado. Asesoramos el  sector empresarial público y privado, en la introducción efectiva de las TICs, a través del diseño, comercialización e implementación de soluciones para contribuir al desarrollo tecnológico de Colombia.</h>
                </div>
                
            </div>
        )
    }
}
export default HomePage;