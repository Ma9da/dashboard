import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearchFilter',
})
export class UserSearchFilterPipe implements PipeTransform {
  transform(users: Array<any>, searchTerm: string, statusFilter: string): any {
    if (!users) {
      return [];
    }

    // Apply the status filter if it exists
    if (statusFilter === 'active') {
      users = users.filter((user) => user.status === 'active');
    } else if (statusFilter === 'inactive') {
      users = users.filter((user) => user.status === 'inactive');
    }

    // If no search term is provided, return the filtered users by status
    if (!searchTerm) {
      return users;
    }

    // Apply the search term filter
    searchTerm = searchTerm.toLowerCase();
    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.gender.toLowerCase().includes(searchTerm) ||
        user.status.toLowerCase().includes(searchTerm)
      );
    });
  }
}
