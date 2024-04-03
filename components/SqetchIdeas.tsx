"use client"
import { useEffect, useState } from "react";
import CreateSqetch from "./CreateSqetch";
import { MdOutlinePushPin } from "react-icons/md";
import Loader from "./shared/Loader";
import { motion } from 'framer-motion';
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const Sqetch = () => {

    const [sqetchs, setSqetchs] = useState<string[]>([]);
    const [sqetchsAreLoaded, setSquetchsAreLoaded] = useState<boolean>(false);

    const addSqetch = (newSqetch: string) => {
        setSqetchs((prevState: string[]) => [newSqetch, ...prevState]);
        localStorage.setItem('sqetchs', JSON.stringify([newSqetch, ...sqetchs]))
    }

    const removeSqetch = (index: number) => {
        const updatedSqetchs = [...sqetchs];
        updatedSqetchs.splice(index, 1);
        setSqetchs(updatedSqetchs);
        localStorage.setItem('sqetchs', JSON.stringify(updatedSqetchs));
        toast("Sqetch removed succesfully")
    }

    const editSqetch = (index: number, newValue: string) => {
        const updatedSqetchs = [...sqetchs];
        updatedSqetchs[index - 1] = newValue;
        setSqetchs(updatedSqetchs);
        localStorage.setItem('sqetchs', JSON.stringify(updatedSqetchs));
        toast("Sqetch edited succesfully")

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

    return <div className="py-4 flex flex-col gap-4 h-full overflow-auto scrollbar-hide">
        <CreateSqetch
            addSqetch={addSqetch}
            noSqetchs={sqetchs.length === 0} />

        {sqetchs.map((sqetch: string, idx: number) => (

            <motion.div
                initial={{ opacity: 0, y: '20px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx / 5 }}
                className=" w-full py-4 border-dotted border-2 border-n-2 flex flex-col rounded-md gap-4 p-2 items-start relative">

                <div className="w-full flex items-center justify-between">
                    <MdOutlinePushPin className="w-[40px] h-[40px]" />
                    <div className="flex flex-row gap-3">
                        <div className="">
                            <MdDelete onClick={() => removeSqetch(idx)} className="w-[30px] h-[30px] cursor-pointer border rounded-md bg-gray-100 border p-1" />
                        </div>
                        <CreateSqetch value={sqetch} sqetchIdx={idx + 1} editSqetch={editSqetch} edit={true} />
                    </div>
                </div>
                <h5 className="h4 text-n-5"> {sqetch} </h5>



            </motion.div>
        ))}

    </div>
}

export default Sqetch