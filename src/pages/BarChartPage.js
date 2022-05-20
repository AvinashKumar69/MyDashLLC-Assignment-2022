import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BarChart from '../components/BarChart';
import data from '../data';

// const data = [
//     { year: 1980, efficiency: 24.3, sales: 8949000 },
//     { year: 1985, efficiency: 27.6, sales: 10979000 },
//     { year: 1990, efficiency: 28, sales: 9303000 },
//     { year: 1991, efficiency: 28.4, sales: 8185000 },
//     { year: 1992, efficiency: 27.9, sales: 8213000 },
//     { year: 1993, efficiency: 28.4, sales: 8518000 },
//     { year: 1994, efficiency: 28.3, sales: 8991000 },
//     { year: 1995, efficiency: 28.6, sales: 8620000 },
//     { year: 1996, efficiency: 28.5, sales: 8479000 },
//     { year: 1997, efficiency: 28.7, sales: 8217000 },
//     { year: 1998, efficiency: 28.8, sales: 8085000 },
//     { year: 1999, efficiency: 28.3, sales: 8638000 },
//     { year: 2000, efficiency: 28.5, sales: 8778000 },
//     { year: 2001, efficiency: 28.8, sales: 8352000 },
//     { year: 2002, efficiency: 29, sales: 8042000 },
//     { year: 2003, efficiency: 29.5, sales: 7556000 },
//     { year: 2004, efficiency: 29.5, sales: 7483000 },
//     { year: 2005, efficiency: 30.3, sales: 7660000 },
//     { year: 2006, efficiency: 30.1, sales: 7762000 },
//     { year: 2007, efficiency: 31.2, sales: 7562000 },
//     { year: 2008, efficiency: 31.5, sales: 6769000 },
//     { year: 2009, efficiency: 32.9, sales: 5402000 },
//     { year: 2010, efficiency: 33.9, sales: 5636000 },
//     { year: 2011, efficiency: 33.1, sales: 6093000 },
//     { year: 2012, efficiency: 35.3, sales: 7245000 },
//     { year: 2013, efficiency: 36.4, sales: 7586000 },
//     { year: 2014, efficiency: 36.5, sales: 7708000 },
//     { year: 2015, efficiency: 37.2, sales: 7517000 },
//     { year: 2016, efficiency: 37.7, sales: 6873000 },
//     { year: 2017, efficiency: 39.4, sales: 6081000 },
//     { year: 2018, efficiency: 36.4, sales: 5081000 },
//     { year: 2019, efficiency: 41.4, sales: 7081000 },
//     { year: 2020, efficiency: 32.4, sales: 4881000 },
//     { year: 2021, efficiency: 44.4, sales: 8081000 },
//     { year: 2022, efficiency: 49.4, sales: 3081000 },
// ]

const BarChartPage = () => {

    const { state } = useLocation()
    console.log('state-->', state);
    const { userData } = state

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-evenly'>
                <h1 className='text-2xl text-center font-mono font-black'>
                    Welcome
                    <Link to='/'>
                        <span className='text-blue-500 tracking-tighter font-serif'> {userData.name}!</span>
                    </Link>
                </h1>
                <h1 className='text-2xl text-center font-mono font-black'>
                    Bar-Chart of Annual Sales Report (Sales/ Year)
                </h1>
            </div>
            <BarChart data={data} />
        </div>
    )
}

export default BarChartPage;