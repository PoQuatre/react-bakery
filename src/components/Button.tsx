import { Component } from "react";

interface Props {
  isSelected: boolean;
  onClick?: () => void;
}

export class Button extends Component<Props> {
  render() {
    return (
      <button
        className={`btn btn-outline-primary ${
          this.props.isSelected ? "active" : ""
        }`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
