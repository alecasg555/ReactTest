import { Card } from '@mui/material';
import React from 'react'
import Results from '../components/Results/ResultsList';
import Search from '../components/Search/Search';
import '../styles/pages/bing-search.css';

//Page component that return the bing search API page.
const BingSearch = () => {

  return (
    <Card variant='outlined' className='bing-search'>
      <Search />
      <Results />
    </Card>
  )
}
export default BingSearch;