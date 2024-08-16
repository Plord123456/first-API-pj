import {Component, Input} from '@angular/core';
import {CatModel} from "../../models/cat.model";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardActions,
    MatCard,
    MatCardHeader,
    MatButton,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  @Input() cat!: CatModel
}
