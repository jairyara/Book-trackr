import {useFetch} from "../../hooks/useFetch.tsx";
import bg from '@/assets/bg.webp';
import {SkeletonLoading} from "./SkeletonLoading.tsx";

const url: string = 'https://api.quotable.io/random';

interface Quote {
    content: string;
    author: string;
    loading: boolean;
}

export const RandomQuote = () => {
    const {data, loading} = useFetch<Quote>(url);

    return (
        <section className='grid'>
            <figure className='col-start-1 row-start-1'>
                <img className='h-screen w-full object-cover object-center'
                     src={bg} alt='Gato leyendo'/>
            </figure>
            {
                loading ? <SkeletonLoading /> : (
                    <blockquote className='bg-limed-spruce/50 w-full h-screen flex
            flex-col items-center justify-center gap-4 col-start-1 row-start-1'>
                        <p className='w-2/3 mx-auto text-center text-2xl text-wild-sand'>
                            {data?.content}
                        </p>
                        <footer>
                            <cite className='text-wild-sand'>{data?.author}</cite>
                        </footer>
                    </blockquote>
                )
            }
        </section>
    )
}