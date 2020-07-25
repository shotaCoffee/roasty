import {User} from '../../firebase/user/user.http.service';

export const updateUser = (user: User) => {
  return {
    type: 'UPDATE_USER',
    user
  }
}
