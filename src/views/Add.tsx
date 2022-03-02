import { ChangeEvent, Component } from "react";

interface Props {
  addItem: (name: string, price: number) => void;
}

interface State {
  name: string;
  price: number;
}

export class Add extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      price: 1,
    };
  }

  onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ price: e.target.valueAsNumber });
  };

  onClickAdd = () => {
    this.props.addItem(this.state.name, this.state.price);
    this.setState({ name: "", price: 1 });
  };

  render() {
    return (
      <>
        <h2 className="text-center mb-4">Add</h2>

        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Item"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <button className="btn btn-primary" onClick={this.onClickAdd}>
            Add
          </button>
        </div>

        <div>
          <p className="text-center mb-2">{this.state.price}€</p>
          <input
            type="range"
            className="form-range"
            min={1}
            max={10}
            value={this.state.price}
            onChange={this.onChangePrice}
          />
        </div>
      </>
    );
  }
}
