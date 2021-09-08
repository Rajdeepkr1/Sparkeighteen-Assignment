
import './App.scss';
import { useEffect, useState } from 'react';
import Header from './componet/Header';
import Feed from './componet/Feed';
import ReactPaginate from 'react-paginate';

function App() {

  const [dataRes, setDataRes] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const ApiData = `http://www.mocky.io/v2/59b3f0b0100000e30b236b7e`;

  const DataOfApi = async (e) => {
    try {
      const res = await fetch(ApiData);
      const data = await res.json();
      setDataRes(data.posts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    DataOfApi();
  }, []);
  
  const userPerPage =2;
  const pageVisited = pageNumber*userPerPage

  const displayUsers = dataRes.slice(pageVisited,pageVisited+userPerPage).map((data)=>{
    return (
      <div key={data.id}>
        <Feed data={data}/>
      </div>
    );
  })
  const pageCount = Math.ceil(dataRes.length / userPerPage);

  const changePage =({selected})=>{
    setPageNumber(selected);
  }

  return (
    <div className="App">
     <Header/>
     <div>
     {displayUsers}
    </div>
    <ReactPaginate
    previousLabel={"Prev"}
    nextLabel={"Next"}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={"PaginationBttns"}
    previousLinkClassName={"previousBttn"}
    nextLinkClassName={"nextBttn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
    />
    </div>
  );
}

export default App;
