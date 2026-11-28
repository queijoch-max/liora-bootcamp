import UserList from "./components/UserList";
import ProductDashboard from "./components/ProductDashboard";
import LoginForm from "./components/LoginForm";
import MapContainer from "./components/MapContainer";
import RenderCounter from "./components/RenderCounter";
import Stopwash from "./components/Stopwatch";

const App = () => {
  return (
    <>
    <h2>Exercice 1</h2>
    <UserList />
    <hr />

    <h2>Exercice 2</h2>
    <ProductDashboard />
    <hr />

    <h2>Exercice 3</h2>
    <LoginForm />
    <hr />

    <h2>Exercice 4</h2>
    <MapContainer />
    <hr />

    <h2>Exercice 5</h2>
    <RenderCounter />
    <hr />

    <h2>Exercice 6</h2>
    <Stopwash />
    <hr />
    </>
  )
}

export default App