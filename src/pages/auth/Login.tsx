


export const Login = () => {
    return(
        <div className=' '>
            <h2>
                Login
            </h2>

            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}