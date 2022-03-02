class Mascota{
    constructor(nombre, enfermedad){
        this.__nombre = ()=> nombre
        this.__enfermedad = () => enfermedad
    }

    get nombre(){
        return this.__nombre()
    }
    set nombre(nombre){
        this.__nombre()= nombre
    }
    get enfermedad(){
        return this.__enfermedad()
    }
    set enfermedad(enfermedad){
        this.__nombre()= enfermedad
    }


}

export default Mascota