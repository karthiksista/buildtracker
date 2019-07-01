import React from "react";

const MenuList = () => {
  return (
    <div>
      <input type="checkbox" value="weie" name="weie" /> Roti
      <input type="checkbox" value="jenes" name="jenes" />
      RIce
      <input type="checkbox" value="jskdnc" name="jskdnc" />
      Curd
    </div>
  );
  //   return "sdjn";
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showMenu = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>dsc</button>
        {this.state.show ? <MenuList /> : ""}
      </div>
    );
    // return this.show ? { menuList } : "sfd";
  }
}

export default Menu;
