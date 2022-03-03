import { Component } from "react";
import { capitalize } from "../utils";

const ASSET_URL =
  "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/";

interface Props {
  name: string;
  price: number;
  onClick?: (name: string, price: number) => void;
}

interface State {
  image: string;
}

export class Card extends Component<Props, State> {
  private controller: AbortController;

  constructor(props: Props) {
    super(props);

    this.state = {
      image: "/images/placeholder.png",
    };

    this.controller = new AbortController();
  }

  componentDidMount = () => {
    fetch(`${ASSET_URL}${this.props.name}.png`, {
      signal: this.controller.signal,
    })
      .then((res) => (res.ok ? res.blob() : null))
      .then(
        (res) =>
          res !== null && this.setState({ image: URL.createObjectURL(res) })
      )
      .catch((err) => err.name !== "AbortError" && console.warn(err));
  };

  componentWillUnmount = () => {
    this.controller.abort();
  };

  onClickHandler = () => {
    if (this.props.onClick !== undefined) {
      this.props.onClick(this.props.name, this.props.price);
    }
  };

  render() {
    return (
      <div className="col d-flex align-items-stretch">
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={this.onClickHandler}
        >
          <div className="flex-grow-1 d-flex align-items-center">
            <img
              className="card-img-top"
              src={this.state.image}
              alt={`${this.props.name}`}
            />
          </div>
          <div className="card-body flex-grow-0">
            <div className="card-title mb-0 d-flex justify-content-between h5">
              <span>{capitalize(this.props.name)}</span>
              <span>{this.props.price.toFixed(2)} €</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
