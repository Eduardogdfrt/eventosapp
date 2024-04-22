import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent implements OnInit {
  ngOnInit(): void {
    this.getEventos();
  }
  public eventos : any;

  constructor(private http: HttpClient)
  {

  } 
  public getEventos(): void{
    this.http.get('https://localhost:7245/api/eventos').subscribe( 
      response => this.eventos =  response,
      error => console.log(error));
  }

}