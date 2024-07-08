import React from 'react'
import MovieCard from './MovieCard'
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";
// import Paginate from './Paginate/Paginate';
// import Loader from './Loader/Loader';


const Home = ({ data, page, setPage, inputData }) => {
    // console.log('From Home', data);
    // console.log('From Home', data.results);

    let fData = data.results;

    // console.log('From Home', fData);
    // const { authUser, isLoading } = useAuth();


    const pagePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const pageNext = () => {
        setPage(page + 1);
        // fData = [...fData, fData];
    }

    return (
        <>
            {/* <h1>Home</h1> */}
            <main className=''>
                {/* <div className='leftBar' >
                    <LeftBar />
                </div> */}
                <div className="rightBar flex flex-wrap gap-4 items-center justify-between">
                    <div className='w-full my-2'>
                        <h1 className='text-2xl text-yellow-300 my-2'><span> {inputData ? `${inputData}` : 'Now Playing,'}</span> Total results: {data.total_results}</h1>
                    </div>
                    {/* <Paginate onIntersection={pageNext}  */}
                    {
                        Array.isArray(fData) &&
                        fData.map((item, index) => {
                            return (
                                <div className='' key={index}>
                                    {/* <h1>{item.title}</h1> */}
                                    <MovieCard title={item.title} setPage={setPage} vote_average={item.vote_average} overview={item.overview} original_language={item.original_language} poster_path={item.poster_path} id={item.id} />
                                </div >
                            );
                        })

                    }
                    {/* </Paginate > */}
                </div >

            </main>

            <div className={`${data.total_pages < 2 ? 'opacity-0' : ''}`} >
                <div className="prev-next flex items-center justify-around ml-auto w-[80%] h-20">
                    <Button onClick={pagePrev} variant="text" className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white">
                        <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" />Previous Page
                    </Button>
                    <span>Page: {page} of {data.total_pages}</span>
                    <Button onClick={pageNext} variant="text" className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white">
                        Next Page <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home