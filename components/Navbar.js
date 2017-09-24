import { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const { brandStyle, textStyle } = styles;

    return (
      <div>
        <div className="container">
          <Navbar inverse toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand style={brandStyle} href="/">
              minirl
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={textStyle} href="https://github.com/KaranPhadnisNaik/miniRL">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <style global jsx>{`
          // Container Fix for Bootstrap 4 alpha
          @media (max-width: 568px) {
            .container {
              margin-left: 0;
              margin-right: 0;
            }
          }
        `}</style>
      </div>
    );
  }
}

const styles = {
  brandStyle: {
    color: 'black',
  },
  textStyle: {
    color: 'black',
  },
};

export default AppNavbar;
