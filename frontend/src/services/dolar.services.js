const URL = 'http://127.0.0.1:3100'

export const precioService = async (tipoDolar) => {
    try {
        const res = await fetch(`${URL}/dolar/${tipoDolar}`)

        if (!res.ok) {
            throw new Error('Error al obtener el precio del dolar')
        }

        const data = await res.json()

        return data
    } catch (e) {
        throw e
    }
}
