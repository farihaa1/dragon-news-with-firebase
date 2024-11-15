
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginWith = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='font-semibold'>Login with</h2>
            <div  className='flex flex-col gap-3'>
                <button className='btn flex text-sm'><FaGoogle/> Login with google</button>
                <button className='btn flex text-sm'><FaGithub></FaGithub> Login with github</button>
            </div>
        </div>
    );
};

export default LoginWith;