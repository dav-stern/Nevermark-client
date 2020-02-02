import React,{ useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';
import Filters from '../../components/Filters/Filters';
import './ResultsLanding.css';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';
import { fetchUserHistory } from '../../ApiClient';

const ResultsLanding: React.FC = () => {
  const [results,setResults] = useState([]);
  const [query,setQuery] = useState(useLocation().search.slice(5));
  const history = createBrowserHistory();
  // const searchString = ;
  const pathName = useLocation().pathname;
  let searchString = '';
  if (pathName !== '/search') {
    searchString = pathName.replace('/search/','');
  }
  useEffect(() => {
    setQuery(searchString);
    fetchUserHistory(searchString)
      .then((res:any) => res.json())
      .then((res:any) => {
        setResults(res.results);
      }).catch((e:any) => {
        const error:any = { error : e };
        setResults(error);
      });

  }, []); //eslint-disable-line

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value;
    setQuery(searchString);
    fetchUserHistory(searchString)
      .then((res:any) => res.json())
      .then((res:any) => {
        setResults(res.results);
        history.push({
          pathname : `/search/${searchString}`,

        });
      });
  };

  return (
    <>
      <HeaderLogged updateQuery={updateQuery} query={query} />
      <Filters />
      <ResultsContainer results={results} />
    </>
  );
};

export default ResultsLanding;
