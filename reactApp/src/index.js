import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute";
import AuthHeader from "./components/authHeader";
import SignUpPage from "./pages/signUpPage";
import AboutPage from "./pages/aboutPage";
import ProfilePage from "./pages/profilePage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'; //this is our bottom bar that shows


import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import NetworksPage from "./pages/networksPage";
import TVPage from "./pages/tvPage";
import TVDetailsPage from "./pages/tvDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <AuthProvider>
        <AuthHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
            <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
            <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <PrivateRoute path="/movies/:id" component={MoviePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/networks" component={NetworksPage} />
          <Route exact path="/shows" component={TVPage} />
          <Route path="/shows/:id" component={TVDetailsPage} />
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <Redirect from="*" to="/" />
            </Switch>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
