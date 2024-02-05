import signUpPicture from '../assets/signUpPicture.png';

export default function SignUp() {
    return(
        // <div className="min-h-screen w-full bg-gradient-to-bl from-transparent via-blue-marguerite-300 flex justify-center items-center">
        <div className="min-h-screen w-full bg-gradient-to-r from-yellow-100 to-orange-100 flex justify-center items-center">
            <div className="grid grid-cols-2 bg-white w-2/3 h-4/5 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                <div className="px-9 py-9">
                    <div className="flex flex-row px-5">
                        <p className='text-xs pb-5 pt-4 pr-1'>Already have an account? <a className='text-xs underline decoration-{sky-500} text-sky-500 pl-1' href="/signin">Sign in</a></p>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 py-8 px-5">
                        <p>Sign Up 📝</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        <Field label="Name" givenType="text"/>
                        <Field label="Email" givenType="text"/>
                    </div>
                    <Field label="Password" givenType="password"/>
                    <TnC />
                    <Button label="Sign Up" />
                </div>
                <div className="flex items-center">
                    <img className="object-cover" src={signUpPicture} alt="picture" />
                </div>
            </div>
        </div>
    )
}

function Field(props) {
    return(
        <div className="py-2 px-5">
            <p className='text-xs pb-2'>{props.label}</p>
            <input className='px-2 py-2 border-solid border-2 text-xs border-gray-500/50 rounded-lg w-full' type={props.givenType}></input>
        </div>
    )
}

function Button(props) {
    return(
        <div className='flex justify-center py-8 px-5'>
            <button className='w-full text-white bg-blue-marguerite-500 text-xs rounded-lg drop-shadow-xl hover:bg-blue-marguerite-700 py-2'>{props.label}</button>
        </div>
    )
}

function TnC() {
    return(
        <div className='py-4 px-5 flex flex-row items-center'>
            <input className='size-3 rounded-lg' type='checkbox' />
            <p className='text-xs pl-2'>I've read the <a href='/termsandconditions' className='text-xs underline decoration-{sky-500} text-sky-500 cursor-pointer'>Terms and Conditions</a></p>
        </div>
    )
}