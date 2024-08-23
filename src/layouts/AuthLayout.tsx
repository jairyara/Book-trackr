import {Outlet} from "react-router-dom";
import {RandomQuote} from "../components/misc/RandomQuote.tsx";
import {BrandAuth} from "../components/brand/BrandAuth.tsx";


export const AuthLayout = () => {
    return (
        <section className='w-full h-screen grid grid-cols-5'>
            <section className='col-span-2 p-10'>
                <BrandAuth />
                <Outlet/>
            </section>
            <section className='col-span-3'>
                <RandomQuote />
            </section>

        </section>
    );
}