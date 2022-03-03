import { Component } from "react";
import { Card, CartContent } from "../components";

interface Props {
  items: Item[];
}

interface State {
  shoppingCart: Item[];
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
    const shoppingCart = [...this.state.shoppingCart, { name, price }];
    const total = shoppingCart.reduce((total, item) => total + item.price, 0);
    const totalEcoTax = shoppingCart.length * 0.03;
    const totalTVA = total / 5;
    const totalTTC = total + totalEcoTax + totalTVA;

    this.setState({
      shoppingCart,
      total,
      totalEcoTax,
      totalTVA,
      totalTTC,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center mb-4">Pay</h2>

        {this.props.items.length === 0 ? (
          <h3>No items are available</h3>
        ) : (
          <>
            <CartContent items={this.state.shoppingCart} />

            <div className="text-end mb-5">
              <p className="mb-1">SubTotal: {this.state.total.toFixed(2)} €</p>
              <p className="mb-1">VAT: {this.state.totalTVA.toFixed(2)} €</p>
              <p className="mb-2">
                Eco tax: {this.state.totalEcoTax.toFixed(2)} €
              </p>
              <p className="h4">Total: {this.state.totalTTC.toFixed(2)} €</p>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-auto g-2">
              {this.props.items.map((item) => (
                <Card key={item.name} {...item} onClick={this.handleSelect} />
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}
