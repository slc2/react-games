import {useState} from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onItemClick: (item: string) => void;
}

// properties are inputs to components and should be treated as immutable
// state is like local variables
// but any time either changes react will update dom accordingly

function ListGroup({items, heading, onItemClick}: ListGroupProps) {
    // state hook to connect to react features
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onItemClick(item);
                        }}>
                        {item}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default ListGroup;