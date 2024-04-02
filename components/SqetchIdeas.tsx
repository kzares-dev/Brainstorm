"use client"
import { useEffect, useState } from "react";
import CreateSqetch from "./CreateSqetch";
import { MdOutlinePushPin } from "react-icons/md";
import Loader from "./shared/Loader";
import { motion } from 'framer-motion';

const Sqetch = () => {

    const [sqetchs, setSqetchs] = useState<string[]>([]);
    const [sqetchsAreLoaded, setSquetchsAreLoaded] = useState<boolean>(false);

    const addSqetch = (newSqetch: string) => {
        setSqetchs((prevState: string[]) => [newSqetch, ...prevState]);
        localStorage.setItem('sqetchs', JSON.stringify([newSqetch, ...sqetchs]))
    }

    // get the sqetchs saved in localStorage 
    useEffect(() => {
        const localSqetchs = JSON.parse(localStorage.getItem('sqetchs') || '[]');
        if (localSqetchs) setSqetchs(localSqetchs);
        setSquetchsAreLoaded(true)
    }, []);


    if (!sqetchsAreLoaded) return <div className="w-full  flex items-center justify-center h-[50vh]">
        <Loader />
    </div>

    return <div className="py-4 flex flex-col gap-4">
        <CreateSqetch
            addSqetch={addSqetch}
            noSqetchs={sqetchs.length === 0} />

        {sqetchs.map((sqetch: string, idx: number) => (

            <motion.div
                initial={{ opacity: 0, y: '20px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx / 5 }}
                className="cursor-pointer w-full py-4 border-dotted border-2 border-n-2 flex flex-row items-center rounded-md gap-4 p-2 items-start">
                <div className=""><MdOutlinePushPin className="w-[40px] h-[40px]" /></div>
                <h5 className="h4 text-n-5"> {sqetch} </h5>
            </motion.div>
        ))}

    </div>
}

export default Sqetch