import Home from "./Home/page";
import Details from "./Details/page";
import Rundown from "./Rundown/page";
import Registration from "./Registration/page";

export default function Wrapper() {
    return (
        <main>
            <Home />
            <Details />
            <Rundown />
            <Registration />
        </main>
    );
}
