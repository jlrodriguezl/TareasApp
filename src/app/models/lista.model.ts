import {ListaItem} from './lista-item.model';

export class Lista{
    id: number;
    titulo: string;
    creadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor(titulo: string){
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];
    }
}