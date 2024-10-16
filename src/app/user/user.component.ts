import { Component, Input, computed, input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  //@Output() select = new EventEmitter<string>();
  select = output<string>();
  //avatar = input.required<string>();
  //name = input.required<string>();

  //imagePath = computed(() => {
  //  return 'assets/users/' + this.avatar();
  //});

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  
  onSelectUser(id: string){
    this.select.emit(this.id);
  }
}