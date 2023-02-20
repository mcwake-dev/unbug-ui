import { useAtom } from "jotai"
import { useParams, Link } from "react-router-dom";

import { appIdAtom, loadableApp } from "../../atoms/apps.atom";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Versions from "../../components/Versions";

export default function ReadApp() {
    const { appId } = useParams();
    const [, setAppIdAtom] = useAtom(appIdAtom);

    setAppIdAtom(appId);

    const [value] = useAtom(loadableApp);

    if (value.state === "hasError") return <Error error={value.error} />;
    if (value.state === "loading") return <Loading />;

    const { app_name } = value.data;

    return (
        <div>
            <h1>{app_name}</h1>
            <Versions />
            <Link to={"/apps"}>Back to Apps</Link>
        </div>
    )
}