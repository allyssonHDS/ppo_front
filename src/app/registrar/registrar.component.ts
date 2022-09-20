import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import RequestCreat from './registrar.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  request: RequestCreat = {
    nome: "",
    nomeUsuario: "",
    email: "",
    senha: "",
    papel: "",
    dataHoraRegistro: new Date()

  }

  constructor() { }

  ngOnInit(): void {
  }

}
