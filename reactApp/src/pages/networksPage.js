import React from "react";
import PageTemplate from "../components/templateNetworkListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getNetworks} from '../api/tmdb-api'
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const NetworksPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('networks', getNetworks)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const networks = data.results;

  return (
    <PageTemplate
      title="Discover Networks"
      networks={networks}   
    />
);
};

export default NetworksPage;