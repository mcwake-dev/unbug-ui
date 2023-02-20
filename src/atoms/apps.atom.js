import { atom } from "jotai";
import { loadable } from "jotai/utils";
import axios from "axios";

const appsAtom = atom(async (get) => {
    const response = await axios.get("http://localhost:3000/api/apps");

    return response.data;
});

export const appIdAtom = atom();

const appAtom = atom(async (get) => {
    const appId = get(appIdAtom);
    const response = await axios.get(`http://localhost:3000/api/apps/${appId}`);

    return response.data;
});

export const loadableApps = loadable(appsAtom);
export const loadableApp = loadable(appAtom);