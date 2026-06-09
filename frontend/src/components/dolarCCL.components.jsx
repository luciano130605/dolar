import { useEffect, useState } from "react";
import "../App.css"
import { precioService } from "../services/dolar.services"

export default function DolarCCL() {
    const [dolar, setDolar] = useState(null)

    useEffect(() => {
        const cargarDolar = async () => {
            try {
                const data = await precioService('contadoconliqui')
                setDolar(data)
            } catch (e) {
                console.error(e)
            }
        }
        cargarDolar()
    }, [])

    return (
        <div className="cont">
            <h2 title="Dólar contado con liqui">Dólar CCL</h2>
            {dolar && (
                <>
                    <div className="dolarCont">
                        <div className="compra">
                            <label>compra</label>
                            <span>${dolar.compra}</span>
                        </div>
                        <div className="venta">
                            <label>venta</label>
                            <span>${dolar.venta}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )

}