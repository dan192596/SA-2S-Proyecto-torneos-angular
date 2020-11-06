import { Component, OnInit } from '@angular/core';
import { RestManagerService } from 'src/app/app-service/rest-service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-crud',
  templateUrl: './contact-crud.component.html',
  styleUrls: ['./contact-crud.component.css']
})
export class ContactCrudComponent implements OnInit {

  public name = new FormControl('', [Validators.required]);

  title:string = "Titulo por defecto"
  mode:string = "modo por defecto"
  FormGroup: FormControl[] = [];
  currentId: number;
  url: string ="https://api.softwareavanzado.world/index.php"
  
  constructor(public route: ActivatedRoute,private restService: RestManagerService) { 
    this.title = route.snapshot.data.title;

    // Modalidad de ejecución
    this.mode = route.snapshot.data.mode;

    this.FormGroup = [
      this.name      
    ];

    if (this.mode !== 'create') {
      this.route.queryParams
        .subscribe(profile => {
          console.log(profile);
          this.currentId = profile.id;
        });
    } else {
      this.currentId = 0;
    }
  }

  fillForm(): void {
    const params = new Map<string, string>();
    // Contenido de pagina
    params.set('webserviceClient', 'administrator');
    params.set('webserviceVersion', '1.0.0');
    params.set('option', 'contact');
    params.set('api', 'hal');
    params.set('id',  this.currentId.toString());

   new Promise(resolve => {
      setTimeout(() => {
        this.restService.getWithParams(this.url, '','',params).subscribe(
          response => {
            console.log(response['name']);
            this.name.setValue(response['name']);
        }, error => {
            console.error(JSON.stringify(error));
        });
      }, 1000);
    });
  }

  getForm() {
    return {      
      name: this.name.value
    };
  }

  create(): void {
    const params = new Map<string, string>();
    // Contenido de pagina
    params.set('webserviceClient', 'administrator');
    params.set('webserviceVersion', '1.0.0');
    params.set('option', 'contact');
    params.set('api', 'hal');    

    if (this.mode === 'create') {
      this.restService.insertObject(this.url, '', this.getForm(),params).subscribe(response => {
          alert('Contacto creado con éxito.')
          console.log(response)
      }, error => {
        console.error(JSON.stringify(error));
      });
    } else {
      alert('El formulario no es válido o no tiene permisos para ejecutar esta acción');
    }
  }

  ngOnInit(): void {
    if(this.mode!=='create'){
      this.fillForm()
    }
  }

}
