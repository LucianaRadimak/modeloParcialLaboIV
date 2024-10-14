export class Pelicula {
    id: number;
    nombre: string;
    tipo: 'Terror' | 'Comedia' | 'Amor' | 'Otros';
    fechaEstreno: Date;
    cantidadPublico: number;
    foto: string;
    protagonista: any;
  
    constructor(
      id: number,
      nombre: string,
      tipo: 'Terror' | 'Comedia' | 'Amor' | 'Otros',
      fechaEstreno: Date,
      cantidadPublico: number,
      foto: string,
      protagonista: any
    ) {
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.fechaEstreno = fechaEstreno;
      this.cantidadPublico = cantidadPublico;
      this.foto = foto;
      this.protagonista = protagonista;
    }
  
    // Método para devolver la información de la película en formato JSON
    toJson(): any {
      return {
        id: this.id,
        nombre: this.nombre,
        tipo: this.tipo,
        fechaEstreno: this.fechaEstreno,
        cantidadPublico: this.cantidadPublico,
        foto: this.foto,
        protagonista: this.protagonista
      };
    }
}
