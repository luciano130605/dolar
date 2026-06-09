const URL = 'http://127.0.0.1:3100/v1'
export const monedaService = async (moneda) => {
    try {
        const res = await fetch(`${URL}/cotizaciones/${moneda}`)

        if (!res.ok) {
            throw new Error('Error al obtener el precio de', moneda)
        }

        const data = await res.json()

        return data
    } catch (e) {
        throw e
    }
}
