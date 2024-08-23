import Logo from '../../assets/book_trackr.webp'

export const BrandAuth = () => {
    return (
        <figure className='flex items-center justify-center gap-4'>
            <img className='aspect-square w-24' src={Logo} alt="Book Trackr Logo"/>
            <h1 className='text-wild-sand font-bold text-4xl'>Book Trackr</h1>
        </figure>
    )
}