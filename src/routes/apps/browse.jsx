import { useAtom } from "jotai"
import { Link } from "react-router-dom";

import { loadableApps } from "../../atoms/apps.atom"
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function BrowseApps() {
    const [value] = useAtom(loadableApps);

    if (value.state === "hasError") return <Error error={value.error} />;
    if (value.state === "loading") return <Loading />;

    return (
        <div>
            <h1>Apps Index</h1>
            <div>
                {value.data.map(app => <div className="app"><Link to={"/apps/" + app.app_id}>{app.app_name}</Link></div>)}
                <Link to="/apps/new">Add</Link>
            </div>
        </div>
    )
}