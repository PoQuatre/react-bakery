import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Button } from "./components";
import { Add, List, Pay } from "./views";

type Tab = "add" | "list" | "pay";

interface State {
  activeTab: Tab;
  items: {
    name: string;
    price: number;
  }[];
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      activeTab: "add",
      items: [],
    };
  }

  selectTab = (tab: Tab) => {
    this.setState({ activeTab: tab });
  };

  renderView = () => {
    switch (this.state.activeTab) {
      case "add":
        return <Add />;
      case "list":
        return <List />;
      case "pay":
        return <Pay />;
      default:
        return <h1>There is no "{this.state.activeTab}" tab</h1>;
    }
  };

  render() {
    return (
      <div className="container-md py-5">
        <h1 className="text-center mb-4">Bakery</h1>

        <div className="d-flex justify-content-center">
          <Button
            isSelected={this.state.activeTab === "add"}
            onClick={() => this.selectTab("add")}
          >
            Add
          </Button>
          <Button
            isSelected={this.state.activeTab === "list"}
            onClick={() => this.selectTab("list")}
          >
            List
          </Button>
          <Button
            isSelected={this.state.activeTab === "pay"}
            onClick={() => this.selectTab("pay")}
          >
            Pay
          </Button>
        </div>

        <div className="mt-4">{this.renderView()}</div>
      </div>
    );
  }
}
