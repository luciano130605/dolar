import { useEffect, useState } from "react";
import "../App.css"
import { precioService } from "../services/dolar.services"

export default function DolarOficial() {
    const [dolar, setDolar] = useState(null)

    useEffect(() => {
        const cargarDolar = async () => {
            try {
                const data = await precioService('oficial')
                setDolar(data)
            } catch (e) {
                console.error(e)
            }
        }
        cargarDolar()
    }, [])

    return (
        <div className="cont">
            <h2>Dólar Oficial</h2>
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
    //     return (
    //     //  {
    //     //             dolar && (
    //     //                 <>
    //     //                     <div className="dolar-contenedor">
    //     //                         <p className="compra">
    //     //                             Compra: ${dolar.compra}
    //     //                         </p>

    //     //                         <p className="venta">
    //     //                             Venta: ${dolar.venta}
    //     //                         </p>
    //     //                     </div>
    //     //                     <p className="fecha">

    //     //                         Última actualización · {

    //     //                             new Date(dolar.fecha).toLocaleString(
    //     //                                 'es-AR',
    //     //                                 {
    //     //                                     weekday: 'long',
    //     //                                     day: 'numeric',
    //     //                                     month: 'long',

    //     //                                     hour: 'numeric',
    //     //                                     minute: '2-digit',

    //     //                                     hour12: true
    //     //                                 }
    //     //                             )

    //     //                         }

    //     //                     </p>
    //     //                 </>
    //     //             )
    //     //         }
    //  )
}