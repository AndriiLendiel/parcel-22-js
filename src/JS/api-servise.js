import shortid from 'shortid';


export const fetchAllUsers = () => {
    console.log('fetchAllUsers');
}

export const fetchUsersById = (id) => {
    console.log('fetchUsersById');
}

export const updateUserById = (id) => {
    console.log('updateUserById');
}

export const x = 5;

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name
    }

    console.log(user);
}