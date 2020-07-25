import firebase from 'firebase';

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  description: string | null;
}

export const createUserData = ({uid, displayName, email}: User) => {
  return firebase.database().ref('users/' + uid)
    .set({
      userName: displayName,
      email
    });
}

export const readUser = ({uid}: User) => {
  return firebase.database().ref('users/' + uid)
    .once('value')
}

export const putUser = ({uid, displayName, email, description}: User) => {
  return firebase.database().ref('users/' + uid)
    .update({
      displayName,
      email,
      description
    })
}

