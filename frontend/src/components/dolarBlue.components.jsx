import { useEffect, useState } from "react";
import "../App.css"
import { precioService } from "../services/dolar.services"

export default function DolarBlue() {
    const [dolar, setDolar] = useState(null)

    useEffect(() => {
        const cargarDolar = async () => {
            try {
                const data = await precioService('blue')
                setDolar(data)
            } catch (e) {
                console.error(e)
            }
        }
        cargarDolar()
    }, [])

    return (
        <div className="cont">
            <h2>Dólar Blue</h2>
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