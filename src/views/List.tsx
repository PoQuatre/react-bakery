import { Component } from "react";

interface Props {
  items: {
    name: string;
    price: number;
  }[];
}

export class List extends Component<Props> {
  render() {
    return (
      <>
        <h2 className="text-center mb-4">List</h2>

        {this.props.items.length === 0 ? (
          <h3>No items are available</h3>
        ) : (
          <ul className="list-group">
            {this.props.items.map((item) => (
              <li className="list-group-item d-flex justify-content-between">
                {item.name}{" "}
                <span className="badge bg-primary">{item.price}€</span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
