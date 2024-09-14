import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearchFilter',
})
export class UserSearchFilterPipe implements PipeTransform {
  transform(users: Array<any>, searchTerm: string): any {
    if (!users || !searchTerm) {
      return users;
    }
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
