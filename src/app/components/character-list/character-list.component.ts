import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit{

  characterList: Character[] = [];

  selectedCharacter: Character | null = null;

  constructor(private characterService: CharacterServiceService) {}

  getAllCharacter(): void {
    this.characterService.getAllCharacters().subscribe((data:any) => {
      this.characterList.push(...data)
      console.log(this.characterList);
    })
  }
  selectCharacter(character: Character): void {
    if (this.selectedCharacter === character) {
      this.selectedCharacter = null;
    } else {
      this.selectedCharacter = character;
    }
  }
  deleteCharacter(character: Character): void {
    console.log(character.id);
    if(character.id != null){
      this.characterService.deleteCharacter(character.id).subscribe((data:any)=> console.log(data))
    } 
  }

  ngOnInit(): void {
    this.getAllCharacter();
  }

}
