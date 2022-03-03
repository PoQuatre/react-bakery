import { Component } from "react";

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
  constructor(props: Props) {
    super(props);

    this.state = {
      image: "/images/placeholder.png",
    };
  }

  componentDidMount = () => {
    fetch(`${ASSET_URL}${this.props.name}.png`)
      .then((res) => res.blob())
      .then((res) => this.setState({ image: URL.createObjectURL(res) }));
  };

  onClickHandler = () => {
    if (this.props.onClick !== undefined) {
      this.props.onClick(this.props.name, this.props.price);
    }
  };

  render() {
    return (
      <button onClick={this.onClickHandler}>
        <img src={this.state.image} alt={`${this.props.name}`} />
      </button>
    );
  }
}
