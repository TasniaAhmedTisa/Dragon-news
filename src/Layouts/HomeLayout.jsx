import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Left from '../components/Left';
import Navbar from '../components/Navbar';
import Right from '../components/Right';
import CategoryNews from '../pages/CategoryNews';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
            <Header></Header>    
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
                
            </section>

            </header>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
                </nav> 
                <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
                <aside className='col-span-3'><Left></Left></aside>
                   
                <section className='col-span-6'>
                    <h1>Dragon news Home</h1>
                    <CategoryNews></CategoryNews>
                </section>
                <aside className='col-span-3'>
                    <Right></Right>
                </aside>

                </main>

        </div>
    );
};

export default HomeLayout;