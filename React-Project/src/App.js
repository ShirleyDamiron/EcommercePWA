import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./SCSS/App.scss";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import LogOut from "./Components/LogOut/LogOut";
import ErrorPage from "./Components/Error/Error";

class App extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
    images: [
      "/img/fashionWeek.jpg",
      "/img/modelsWeek.jpg",
      "/img/plaidWeek.jpg",
      "/img/versaceWeek.jpg"
    ],
    currentIndex: 0,
    isUserLoggedIn: false,
    loading: true
  };

  componentDidMount() {
    fetch("/api/checkToken")
      .then(response => response.json())
      .then(response => {
        console.log(response, 'hey')
        if (response.status === 200) {
          this.setState({ isUserLoggedIn: true, loading: false });
          return;
        }
        this.setState({ isUserLoggedIn: false, loading: true });
      });
  }
  //   slider
  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState({
      currentIndex: this.state.currentIndex - 1
    });
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0
      });
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1
    });
  };

  signOut = () => {
    fetch("/api/signOut").then(res => {
      console.log(res)
      window.location.reload();
    });
  };

  render() {
    const { isUserLoggedIn, loading } = this.state;
    return (
      <BrowserRouter>
        <Nav
          isUserLoggedIn={isUserLoggedIn}
          loading={loading}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                images={this.state.images}
                currentIndex={this.state.currentIndex}
                goToNextSlide={this.goToNextSlide}
                goToPrevSlide={this.goToPrevSlide}
              />
            )}
          />
          <Route
            path="/products"
            render={() => {
              return isUserLoggedIn ? (
                <Products />
              ) : (
                <ErrorPage />
              );
            }}
          />
          <Route path="/contact" component={Contact} />

          <Route
            path="/signUp"
            render={props => {
              return <SignUp {...props} />;
            }}
          />
          <Route
            path="/signIn"
            render={props => {
              return <SignIn {...props} />;
            }}
          />
          <Route
            path="/signOut"
            render={() => {
              return <LogOut signOut={this.signOut} />;
            }}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
