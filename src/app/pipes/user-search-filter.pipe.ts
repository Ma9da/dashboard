import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../models/iuser';

@Pipe({
  name: 'userSearchFilter',
})
export class UserSearchFilterPipe implements PipeTransform {
  transform(
    users: Array<Iuser>,
    searchTerm: string,
    statusFilter: string
  ): Array<Iuser> {
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
