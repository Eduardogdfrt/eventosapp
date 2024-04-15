import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EventosComponent} from './eventos/eventos.component'
import { PalestranteComponent } from './palestrante/palestrante.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventosComponent, PalestranteComponent, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eventosapp';
}
