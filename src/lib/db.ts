import { Database } from "simpl.db";

type Profile = {
    id: string,
    firstname: string,
    surname: string,
    email: string
}

export const db = new Database(
    {
        collectionsFolder: './data/collections',
        dataFile: './data/data.json',
        tabSize: 2
    }
);

export const Profiles = db.createCollection<Profile>('profiles');