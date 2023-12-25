import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState([]);
    const [search , setSearch] = useState("Mumbai")

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=308aaa0447c823e10d88f27f38a1a748`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
       
      

    }

    return (
        <> 
        <div className='container-fluid mt-5'>
            <div className='row text-center'>
            {/* {user.map((curElem) => {
                return (
                    <div className="col-10 col-md-4 mt-5" key="">
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image"> <img src="" className="rounded" width="155" /> </div>
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"> </h4>

                                  

                                </div>
                            </div>
                        </div>
                    </div>

                )
            })} */}
              </div>
          </div>

        </>
    )
};

export default UserDetails;