import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from './services/estados/estados.service';
import { PaisesService } from './services/paises/paises.service';
import { PersonaService } from './services/persona/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  personaForm: FormGroup = new FormGroup({});
  //personaForm: FormGroup 
  paises: any;
  estados: any;

  constructor(
    public fb: FormBuilder,
    public estadosService: EstadosService,
    public paisesService: PaisesService,
    public personaService: PersonaService
  ) {

  }
  ngOnInit(): void {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
    })

    this.paisesService.getAllPaises().subscribe(reso => {
      this.paises = reso;
    },
      error => { console.error(error) }
    )
    this.personaForm.get('pais')?.valueChanges.subscribe(value => {
      this.estadosService.getAllEstadosByPais(value.id).subscribe(reso => {
        this.estados = reso;
      },
        error => { console.error(error) }
      );
    })

  }

  guardar(): void {
    this.personaService.savePersona(this.personaForm.valid).subscribe(reso => {

    }, error => { console.error(error) }
    )
  }

}
