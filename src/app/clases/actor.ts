export class Actor {
    nombre: string;
    apellido: string;
    documento: string;
    edad: number;
    pais: string;
  
    constructor(nombre: string, apellido: string, documento: string, edad: number, pais: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.documento = documento;
      this.edad = edad;
      this.pais = pais;
    }
  
    toJSON() {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        documento: this.documento,
        edad: this.edad,
        pais: this.pais
      };
    }
}
