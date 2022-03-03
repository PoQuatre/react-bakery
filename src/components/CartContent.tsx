import { Component } from "react";
import { capitalize, randomString } from "../utils";

type Entry = Item & { quantity: number };

interface Props {
  items: Item[];
}

export class CartContent extends Component<Props> {
  getItems = (): Entry[] => {
    const res: Entry[] = [];

    this.props.items.forEach((item) => {
      const resItem = res.find((val) => val.name === item.name);
      if (resItem !== undefined) {
        resItem.quantity++;
      } else {
        res.push({ name: item.name, price: item.price, quantity: 1 });
      }
    });

    return res;
  };

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: 1 }}>Qty</th>
              <th>Item</th>
              <th className="text-end" style={{ width: "max(10vw, 72px)" }}>
                Unit Price
              </th>
              <th className="text-end" style={{ width: "max(10vw, 72px)" }}>
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            {this.getItems().map((item) => (
              <tr key={randomString(32)}>
                <td>{item.quantity}</td>
                <td>{capitalize(item.name)}</td>
                <td className="text-end">{item.price.toFixed(2)} €</td>
                <td className="text-end">
                  {(item.price * item.quantity).toFixed(2)} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
