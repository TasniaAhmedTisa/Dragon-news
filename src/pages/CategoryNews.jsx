import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData() ;
    console.log(data)
    return (
        <div>

    
        </div>
    );
};

export default CategoryNews;
