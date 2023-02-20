import { atom } from "jotai";
import { loadable } from "jotai/utils";
import axios from "axios";

import { appIdAtom } from "./apps.atom";

const versionsAtom = atom(async (get) => {
    const appId = get(appIdAtom);
    const response = await axios.get(`http://localhost:3000/api/apps/${appId}/versions`);

    return response.data
});

export const loadableVersions = loadable(versionsAtom);