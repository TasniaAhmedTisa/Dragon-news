import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Left = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then ((data) => setCategories(data.data.news_category))
    },[])
    return (
        <div className='grid grid-cols-1'>
            <h1 className='px-8 font-bold'>All Caterogy {categories.length}</h1>
            <div className='flex flex-col gap-4 p-8'>
                {
                    categories.map((category) => (
                        <NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name} </NavLink>
                    ))
                }
            </div>



        </div>
    );
};

export default Left;