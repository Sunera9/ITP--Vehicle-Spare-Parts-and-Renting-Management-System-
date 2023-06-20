import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useHistory } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

import './viewallpendingbills-sorted.css'

function ViewallpendingbillsSorted (props) {

  const [data, setData] = useState ([]);

  //to display all pending bills
  useEffect (() => {
    fetch (`http://localhost:5000/api/utility/pending/getAll`)
    .then (res => res.json())
    .then (data => setData (data))
    .catch (err => console.log (err));
  }, []);

  //calculate total expenditure amount for the month
  const totalAmount = data.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  //to delete a record of pending bill
  function handleDelete (id) {
    fetch(`http://localhost:5000/api/utility/pending/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(d => {
        setData (prevRecords => prevRecords.filter(bill => bill._id !== id));
      })
      .catch(error => console.error(error));
  }

  //to update a record of pending bill
  const history = useHistory();

  const handleUpdateBill = (billToUpdate) => {
    //navigate to the UpdateBill page with the billToUpdate object as state
    history.push ({
      pathname: `/updatependingbilldetails/${billToUpdate._id}`,
      state: { billToUpdate }
    });
  };

  //search functionality
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    history.push({
      pathname: '/searchPendingBill',
      search: `?q=${searchQuery}`
    });
  };

  //to display the month
  const day = new Date();
  const currentMonth = day.toLocaleString('default', { month: 'long' });

  return (
    <div className="viewallpendingbills-sorted-container">
      <Helmet>
        <title>Utility Module - Pending Bills</title>
      </Helmet>
      <div className="viewallpendingbills-sorted-viewallpendingbills-sorted">
        <img
          src="/playground_assets/rectangle22522-0yyp-200h.png"
          alt="Rectangle22522"
          className="viewallpendingbills-sorted-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32522-bf2d-1100h.png"
          alt="Rectangle32522"
          className="viewallpendingbills-sorted-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12522-s8xb-200h.png"
          alt="PNGLogoimage12522"
          className="viewallpendingbills-sorted-pn-logoimage1"
        />
        <span className="viewallpendingbills-sorted-text">
          <span>PENDING BILLS</span>
        </span>
        <img
          src="/playground_assets/rectangle62522-cdmb-200h.png"
          alt="Rectangle62522"
          className="viewallpendingbills-sorted-rectangle6"
        />
        <span className="viewallpendingbills-sorted-text02">
         <span><input type='text' placeholder='Search by Name or Month' id='search-box' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ textAlign: 'center'}} /></span>
        </span>
        <img
          src="/playground_assets/icons8search2412522-1y4m-200h.png"
          alt="icons8search2412522"
          className="viewallpendingbills-sorted-icons8search241"
          id='search-icon'
          onClick={handleSearch}
        />
        <img
          src="/playground_assets/rectangle72523-0sl-200h.png"
          alt="Rectangle72523"
          className="viewallpendingbills-sorted-rectangle7"
        />
        <img
          src="/playground_assets/rectangle222523-lp5k-200h.png"
          alt="Rectangle222523"
          className="viewallpendingbills-sorted-rectangle22"
        />
        <span className="viewallpendingbills-sorted-text04">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/addnewpendingbill'>Add New Bill</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text06">
          <span>
          <button style={{ color: 'white', fontWeight: 'bold' }}>
              <a href='http://localhost:5000/api/utility/download_report/pending_bill' download>
                Download Report
              </a>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle102523-t7o-200h.png"
          alt="Rectangle102523"
          className="viewallpendingbills-sorted-rectangle10"
        />
        <img
          src="/playground_assets/rectangle152523-8qmq-200h.png"
          alt="Rectangle152523"
          className="viewallpendingbills-sorted-rectangle15"
        />
        <img
          src="/playground_assets/rectangle162523-gmq-200h.png"
          alt="Rectangle162523"
          className="viewallpendingbills-sorted-rectangle16"
        />
        <img
          src="/playground_assets/rectangle172523-t2ul-200h.png"
          alt="Rectangle172523"
          className="viewallpendingbills-sorted-rectangle17"
        />
        <img
          src="/playground_assets/rectangle182523-vjw-200h.png"
          alt="Rectangle182523"
          className="viewallpendingbills-sorted-rectangle18"
        />
        <img
          src="/playground_assets/rectangle192523-qvdc-200h.png"
          alt="Rectangle192523"
          className="viewallpendingbills-sorted-rectangle19"
        />
        <img
          src="/playground_assets/rectangle202523-pgcq-200h.png"
          alt="Rectangle202523"
          className="viewallpendingbills-sorted-rectangle20"
        />
        <img
          src="/playground_assets/rectangle212523-xi4h-200h.png"
          alt="Rectangle212523"
          className="viewallpendingbills-sorted-rectangle21"
        />
        <span className="viewallpendingbills-sorted-text08">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Employee</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text10">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Customer</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text12">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Supplier</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text14">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Rentals</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text16">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Spare Parts</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text18">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Inventory</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text20">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Payment</Link>
            </button>
          </span>
        </span>
        <span className="viewallpendingbills-sorted-text22">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Utility Bills</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142523-gg3k-200h.png"
          alt="Rectangle142523"
          className="viewallpendingbills-sorted-rectangle14"
        />
        <span className="viewallpendingbills-sorted-text24">
          <span>Log Out</span>
        </span>
        <img
          src="/playground_assets/mdiaccount2523-tc4.svg"
          alt="mdiaccount2523"
          className="viewallpendingbills-sorted-mdiaccount"
        />
        <img
          src="/playground_assets/materialsymbolsadd2523-1cw.svg"
          alt="materialsymbolsadd2523"
          className="viewallpendingbills-sorted-materialsymbolsadd"
        />
        <img
          src="/playground_assets/materialsymbolsdownloadrounded2523-ofc8.svg"
          alt="materialsymbolsdownloadrounded2523"
          className="viewallpendingbills-sorted-materialsymbolsdownloadrounded"
        />
        <div className="viewallpendingbills-sorted-frame22 viewallpendingbills-sorted-frame22"> 
        <table id='bills'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map (bill => (
                <tr key = {bill._id}>
                  <td>{bill.name}</td>
                  <td>{bill.month}</td>
                  <td>{bill.amount}</td>
                  <td>{bill.date}</td>
                  <td>{bill.note}</td>
                  <td>
                    <button>
                      <Link to={`/viewapendingbill/${bill._id}`}>
                        <span>
                          <AiOutlineEye size={18} color='#4B259B' />
                        </span>
                      </Link>
                    </button>
                    <button onClick={() => handleUpdateBill (bill)}>
                      <span>
                        <FaEdit size={18} color='#4B259B' />
                      </span>
                    </button> 
                    <button  onClick={() => handleDelete(bill._id)}>                  
                      <span>
                        <FaTrashAlt size={18} color='#4B259B' />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <img
          src="/playground_assets/rectangle232525-i7fm-200h.png"
          alt="Rectangle232525"
          className="viewallpendingbills-sorted-rectangle23"
        />
        <span className="viewallpendingbills-sorted-text70">
          <span>{currentMonth} - Total Pending Amount</span>
        </span>
        <span className="viewallpendingbills-sorted-text72">
          <span>: Rs. {totalAmount} /=</span>
        </span>
        <img
          src="/playground_assets/rectangle242525-sn0y-200h.png"
          alt="Rectangle242525"
          className="viewallpendingbills-sorted-rectangle24"
        />
        <span className="viewallpendingbills-sorted-text74">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/view-settledbills-dashboard'>View Settled Bills</Link>
            </button>
          </span>
        </span>
      </div>
    </div>
  )
}

export default ViewallpendingbillsSorted
