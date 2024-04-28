import { useState } from 'react';
import '../src/App.css';
import  Header from '../src/components/Header'
import SearchBar from './components/Search';
import TransactionForm from './components/TransactionsForm';
import TransactionTable from './components/TransactionsTable';



function App() {
  const items = [
    {
        Date:'2024-12-01',
        Description:'Burgers',
        Category:'Food',
        Amount:'$25'
    },
    
    {
        Date:'2024-12-02',
        Description:'Sunglasses',
        Category:'Fashion',
        Amount:'$30'
    },
    
    {
        Date:'2024-12-03',
        Description:'Movies',
        Category:'Entertainment',
        Amount:'$150'
    },
    
    {
        Date:'2024-12-04',
        Description:'Games',
        Category:'Gaming',
        Amount:'$30'
    },
    
    {
        Date:'2024-12-05',
        Description:'Chapati',
        Category:'Food',
        Amount:'$80'
    },
    
    {
        Date:'2024-12-06',
        Description:'Pull neck ,Urban Outfitters',
        Category:'Fashion',
        Amount:'$60'
    },
    
    {
        Date:'2024-12-07',
        Description:'Lexus',
        Category:'vehicles',
        Amount:'$150'
    }
    
    ]
  const [transactions, setTransactions] =useState(items)
  return (
   <div className=''>
    <Header/>
<SearchBar transactions={transactions} setTransactions={setTransactions}
items={items}/>
<TransactionForm transactions={transactions} setTransactions={setTransactions}/>
<TransactionTable transactions={transactions} setTransactions={setTransactions}/>

   </div>
  );
}

export default App;
