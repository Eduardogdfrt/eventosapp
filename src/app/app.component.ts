import { ApplicationModule, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EventosComponent} from './eventos/eventos.component'
import { PalestranteComponent } from './palestrante/palestrante.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventosComponent, PalestranteComponent, HttpClientModule, NavComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eventosapp';
}
