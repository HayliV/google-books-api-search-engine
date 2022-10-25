import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Grid from "./containers/Grid.jsx/Grid";

function App() {
    return (
        <div>
            <Header />
            <Search />
            <Grid></Grid>
        </div>
    );
}

export default App;
