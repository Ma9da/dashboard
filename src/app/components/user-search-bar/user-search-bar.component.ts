import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search-bar',
  templateUrl: './user-search-bar.component.html',
  styleUrl: './user-search-bar.component.scss',
})
export class UserSearchBarComponent {
  @Input() searchTerm: string = '';
  @Input() statusFilter: string = '';
  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() statusFilterChange: EventEmitter<string> =
    new EventEmitter<string>();
  onSearchTermChange(term: string) {
    this.searchTerm = term;
    this.searchTermChange.emit(this.searchTerm);
  }
  onStatusFilterChange(status: string) {
    this.statusFilter = status;
    this.statusFilterChange.emit(this.statusFilter);
  }
}
