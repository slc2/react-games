import ListGroup from './components/ListGroup';
import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const items = [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris"
    ]
    const handleClick = (item: string) => {
        console.log(item);
    }
    const handleButtonClick = () => {
        console.log("button clicked");
    }
    const handleShowAlert = () => {
        console.log("show alert");
        setShowAlert(!showAlert);
    }

    const [showAlert, setShowAlert] = useState(false);

    return <div>

        {showAlert &&
            <Alert onDismiss={handleShowAlert}>
                <h1>Important Notice</h1>
                Under construction
            </Alert>
        }
        <Button onClick={handleShowAlert}>Show alert</Button>
        <Button onClick={handleButtonClick} color="secondary">I am a secondary button</Button>
        <Button onClick={handleButtonClick} color="danger">I am a danger button</Button>
        <ListGroup items={items} heading="Cities" onItemClick={handleClick}></ListGroup>
    </div>
}

export default App;