import { Component, OnInit } from '@angular/core';
import { RestManagerService } from '../../app-service/rest-service';
import {ThemePalette} from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';

export interface Task {
  id:string;  
  completed: boolean;
  color: ThemePalette;  
  nombres: string;
  apellidos?:string;
  administrador?:boolean;
  email?:string;
}

export interface Juego {
  id:number;
  nombre: string;
  ip: string;
}

export interface partida {
  jugador1:string;
  jugador1_punteo:number;
  jugador2:string;
  jugador2_punteo:number;
  uuid:string;
  completada:false;
  torneo:number
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  tasks: Task[];
  usuarios: number[] =[];
  juegos: Juego[];

  partida_data: partida[];

  public juegoId = new FormControl('', [Validators.required]);

  url_usuarios: string ="http://104.155.167.93:8000/"
  url_torneo:string = "http://104.155.167.93:8002/"
  displayedColumns: string[] = ['id', 'nombres','apellidos', 'administrador', 'email'];
  dataSource:any;
  displayedColumnspartidas: string[] = ['torneo', 'uuid', 'jugador1', 'jugador1_punteo', 'jugador2', 'jugador2_punteo','completada'];
  dataSourcePartidas :any;  

  constructor(private restService: RestManagerService) { }

  ngOnInit(): void {
    const params = new Map<string, string>();   
    this.restService.getWithParams(this.url_usuarios, 'jugadores','',params).subscribe(
      response => {
        const r: any = response;
        console.log(response)
        this.tasks = r;            
        this.dataSource = response
        this.tasks.forEach(task => {              
          task.color = 'primary'
          task.completed = false;
        });
    }, error => {
        console.error(JSON.stringify(error));
    });

    this.restService.getWithParams(this.url_torneo, 'juego','',params).subscribe(
      response => {
        console.log(response['juegos'])
        this.juegos = response['juegos'];
    }, error => {
        console.error(JSON.stringify(error));
    });

    this.restService.getWithParams(this.url_torneo, 'partidas','',params).subscribe(
      response => {
        console.log(response['partidas'])
        this.dataSourcePartidas=response['partidas'];
    }, error => {
        console.error(JSON.stringify(error));
    });
  }

  update(completed: boolean, task:Task) {
    task.completed = completed;
    if(completed == false){
      for( var i = 0; i < this.usuarios.length; i++){
        if ( String(this.usuarios[i]) === task.id) {
          this.usuarios.splice(i, 1); 
        }
      }
    }else{
      this.usuarios.push(Number(task.id))
    }
    console.log(this.usuarios)
  }
  
  onClick():void{
    const params = new Map<string, string>();
    this.restService.insertObject(this.url_torneo, 'torneo', { juego:this.juegoId.value, usuarios:this.usuarios},params).subscribe(
      response => {
        alert("Torneo creado")
    }, error => {
        console.error(JSON.stringify(error));
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePartidas.filter = filterValue.trim().toLowerCase();
  }
}
