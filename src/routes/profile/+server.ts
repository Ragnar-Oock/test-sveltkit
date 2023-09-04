import { UUID } from "$lib/uuid";
import { json } from "@sveltejs/kit";
import {Profiles, db} from "$lib/db";


export async function POST(requestEvent) {
    const id = UUID();

    const payload = await requestEvent.request.json();
    const object = { ...payload, id };

    Profiles.create(object);
    Profiles.save();

    return json(object);
}