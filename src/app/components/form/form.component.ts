import { Component } from '@angular/core';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  character = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false
  };

  constructor(private characterService: CharacterServiceService) { }

  submitForm(): void {
    this.characterService.addNewCaracter(this.character).subscribe();
  }

}
