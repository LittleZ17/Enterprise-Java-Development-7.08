import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() character: any;
  @Input() selectedCharacter: any;
  @Output() deleteCharacter = new EventEmitter<any>();
  
  onDelete(): void {
    this.deleteCharacter.emit(this.character);
  }

}
