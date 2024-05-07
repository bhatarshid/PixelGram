import { ID } from 'appwrite';

import { INewUser } from "../../types";
import { account, appwriteConfig, avatars, databases } from './config';

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )

        if(!newAccount) throw new Error;

        const avatarUrl = avatars.getInitials(user.name);    // touser added by me

        const newUser = await saveUserToDB(({
            accountId: newAccount.$id,
            email: newAccount.email,
            name: newAccount.name,
            imageUrl: avatarUrl,
            username: user.username
        }));
        console.log(newUser);
        return newUser
    }
    catch (err) { 
        console.log(err);
        throw err;
     }
}


export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username: string;
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId, 
            appwriteConfig.userCollectionId, 
            ID.unique(), 
            user
        );

        return newUser;
    }
    catch (err) { 
        console.log(err);
        throw err;
     }
}