import err from '../assets/err.avif'

const ErrElement = () => {
    return (
        <div>
            <img className='w-full h-screen' src={err} alt="" />
        </div>
    );
};

export default ErrElement;