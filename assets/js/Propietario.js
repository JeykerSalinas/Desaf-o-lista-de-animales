class Propietario{
    constructor(nombre, direccion, telefono){
        this.__nomre = () => nombre
        this.__direccion = () => direccion
        this.__telefono = () => telefono
    }

    datosPropietario(){
    return (
        `Nombre: ${this.__nomre()}, Dirección: ${this.__direccion()}, Teléfono ${this.__telefono()}
        `
    )
    }
}

export default Propietario