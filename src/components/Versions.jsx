import { useAtom } from "jotai";

import { loadableVersions } from "../atoms/app-versions.atom";
import Loading from "./Loading";
import Error from "./Error";

export default function Versions() {
    const [value] = useAtom(loadableVersions);

    if (value.state === "hasError") return <Error error={value.error} />;
    if (value.state === "loading") return <Loading />;

    const versions = value.data;

    return (
        <div>
            <h2>Versions</h2>
            {
                versions.map(version => {
                    return (
                        <div key={version.app_version_id}>
                            <span>{version.major_version}</span>.
                            <span>{version.minor_version}</span>.
                            <span>{version.patch_version}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}