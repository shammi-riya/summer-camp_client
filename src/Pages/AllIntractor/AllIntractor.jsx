import { useEffect, useState } from "react";



const AllIntractor = () => {

    const [instractors, setInstractors] = useState([])

    useEffect(() => {
        fetch("https://summer-camp-surver.vercel.app/allInstractors")
            .then(res => res.json())
            .then(data => {
                setInstractors(data);
            })
    })


    return (
        <div className="grid md:grid-cols-3 gap-5 px-32 my-36">
            {
                instractors.map(instractor => <>

                    <div className="flex flex-col justify-center ">
                        <div
                            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                            <div className="w-full relative h-64 md:w-1/2 bg-white grid place-items-center">
                                <img src={instractor.img} alt="tailwind logo" className="rounded-xl h-full" />
                            </div>
                            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-2">
                                <h1 className="text-xl">Name: {instractor.name}</h1>
                                <h1 className="text-md">Email: {instractor.email}</h1>
                                <div className="absolute bottom-4">
                                    <button className="text-white hover:bg-[#0c7468] bg-[#07332F] py-3 px-3 rounded font-semibold">See Class</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )
            }
        </div>
    );
};

export default AllIntractor;