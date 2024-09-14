import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search-bar',
  templateUrl: './user-search-bar.component.html',
  styleUrl: './user-search-bar.component.scss',
})
export class UserSearchBarComponent {
  @Input() searchTerm: string = '';
  @Output() searchTermChange: EventEmitter<any> = new EventEmitter<any>();
  onSearchTermChange(term: string) {
    this.searchTerm = term;
    this.searchTermChange.emit(this.searchTerm);
  }

  ngOnChange() {}
}
