import React, { useEffect, useState } from 'react';
import Banner from '../Components/Home/Banner';
import Card from '../Components/JobListing/Card';
import LocaFilter from '../Components/JobListing/LocaFilter';
import Joblisting from '../Components/JobListing/JobListing.jsx';
import SalaryFilt from '../Components/JobListing/SalaryFilt.jsx';
import SalaryRangeFilt from '../Components/JobListing/SalaryRangeFilt.jsx';
import EmploymentType from '../Components/JobListing/EmploymentType.jsx';
import DateOfPosting from '../Components/JobListing/DateOfPosting.jsx';
import ExperienceLevel from '../Components/JobListing/ExperienceLevel.jsx';
import RightSideBar from '../Components/JobListing/RightSideBar.jsx';

export const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // for job title query.
  const [query, setQuery] = useState('');
  const queryReceiver = (event) => {
    setQuery(event.target.value);
  };

  const [jobs, setjobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true)
    // fetch("http://127.0.0.1:8000/")
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setjobs(data);
        setIsLoading(false)
      });
  }, []);

  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()));

  // pagination ...
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 6;

  const calculatePerPage = () => {
    // const lastIndex = recordPerPage * currentPage
    // const firstIndex = lastIndex - recordPerPage

    const startindex = (currentPage - 1) * recordPerPage;
    const endIndex = startindex + recordPerPage;
    return { startindex, endIndex };
  }

  // calculate for next page.
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / recordPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  // calculate for prev page.
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  

  // radio btn filtering.... 
  const handleChangeRadioFilter = (event) => {
    setSelectedCategory(event.target.value);
  };

  // main function. 
  const filterdData = (jobs, selected, query) => {
    let filteredJobsByQuery = jobs;
    // query filtering
    if (query) {
      filteredJobsByQuery = filteredItems;
    }

    if (selected) {
      console.log(selected);
      filteredJobsByQuery = filteredJobsByQuery.filter(({ jobLocation, maxPrice, salaryType, employmentType, postingDate, experienceLevel }) => (
        !selected ||
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        maxPrice <= parseInt(selected) || // Assuming maxPrice is a number
        salaryType === selected ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        postingDate === selected 
      ));
    };
    const { startindex, endIndex } = calculatePerPage();
    filteredJobsByQuery = filteredJobsByQuery.slice(startindex, endIndex);
    return filteredJobsByQuery.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filterdData(jobs, selectedCategory, query);

  return (
    <div className=''>
      <div>
        <Banner query={query} queryReceiver={queryReceiver} />
      </div>

      <section className='container bg-third_color max-w-7xl px-4 py-10 gap-8 grid grid-cols-4'>
        {/* left side */}
        <div className='bg-white p-4 rounded'>
          <h1 className='font-bold mb-3'>Filters</h1>

          <LocaFilter locationQuery={selectedCategory} handleLocationQuery={handleChangeRadioFilter} />
          <SalaryFilt salaryQuery={selectedCategory} handleSalaryQuery={handleChangeRadioFilter} />
          <SalaryRangeFilt salaryRangeQuery={selectedCategory} handleSalaryRangeQuery={handleChangeRadioFilter} />
          <EmploymentType handleEmploymentTypeQuery={handleChangeRadioFilter} />
          <DateOfPosting postingDateQuery={handleChangeRadioFilter} />
          <ExperienceLevel experienceLevelQuery={handleChangeRadioFilter} />
        
        </div>

        {/* job listing */}
        <div className='col-span-2 p-4 bg-white'>
          {
            isLoading ? (<p>Loading....</p>) : result.length > 0 ? <>
              <h3 className='font-bold'>{result.length} Jobs</h3>
              <Joblisting result={result} />
            </>
              : <>
                <h3 className='font-bold'>{result.length} Jobs</h3>
                <p>No data found!</p>
              </>
          }

          {/* Pagination here. */}

          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-4'>
                <button className='btns' onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / recordPerPage)}</span>
                <button className='btns' onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / recordPerPage)}>Next</button>
              </div>

            ) : ""
          }

        </div>

        {/* right side */}
        <div className='bg-white p-4 rounded'>
          <RightSideBar/>
        </div>
      </section>

    </div>
  );
};
