import { Profiles } from "$lib/db.js";
import { error, json } from "@sveltejs/kit";

export function GET(req) {

    console.log('plop');
    console.log(req.params.profileId);

    const profile = Profiles.get(item => item.id === req.params.profileId)

    if (profile) {
        return json(profile);
    }
    else {  
        throw error(404, {message: `profile with id "${req.params.profileId}" not found.`})
    }
}