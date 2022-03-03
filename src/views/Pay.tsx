import { Component } from "react";
import { Card } from "../components";

interface Props {
  items: {
    name: string;
    price: number;
  }[];
}

interface State {
  shoppingCart: {
    name: string;
    price: number;
  }[];
  total: number;
  totalTVA: number;
  totalEcoTax: number;
  totalTTC: number;
}

export class Pay extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      shoppingCart: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    };
  }

  handleSelect = (name: string, price: number) => {
    console.log(name, price);
  };

  render() {
    return (
      <>
        <h2 className="text-center mb-4">Pay</h2>

        {this.props.items.length === 0 ? (
          <h3>No items are available</h3>
        ) : (
          <>
            <div className="text-end">
              <p className="mb-1">SubTotal: {this.state.total.toFixed(2)} €</p>
              <p className="mb-1">VAT: {this.state.totalTVA.toFixed(2)} €</p>
              <p className="mb-2">
                Eco tax: {this.state.totalEcoTax.toFixed(2)} €
              </p>
              <p className="h4">Total: {this.state.totalTTC.toFixed(2)} €</p>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-auto g-2">
              {this.props.items.map((item) => (
                <Card key={item.name} {...item} />
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}
