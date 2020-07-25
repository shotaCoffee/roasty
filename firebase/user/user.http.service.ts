import firebase from 'firebase';

export const createUserData = (userId, name, email) => {
  return firebase.database().ref('users/' + userId)
    .set({
      userName: name,
      email: email
    });
}

export const readUser = (userId) => {
  return firebase.database().ref('users/' + userId)
    .once('value')
}

export const putUser = (userId, displayName, email, description) => {
  return firebase.database().ref('users/' + userId)
    .update({
      displayName,
      email,
      description
    })
}
