"use client"
import { useEffect, useState } from "react";
import CreateSqetch from "./CreateSqetch";
import { MdOutlinePushPin } from "react-icons/md";


const Sqetch = ({ nouns }: { nouns: string[] }) => {

    const [sqetchs, setSqetchs] = useState<string[]>([]);

    const addSqetch = (newSqetch: string) => {
        setSqetchs((prevState: string[]) => [newSqetch,...prevState]);
        localStorage.setItem('sqetchs', JSON.stringify([newSqetch,...sqetchs]))
    }

    // get the sqetchs saved in localStorage 
    useEffect(() => {
        const localSqetchs = JSON.parse(localStorage.getItem('sqetchs') || '[]');
        if(localSqetchs) setSqetchs(localSqetchs);
    }, []);


    return <div className="py-4 flex flex-col gap-4">
        <CreateSqetch
            addSqetch={addSqetch}
            nouns={nouns}
            noSqetchs={sqetchs.length === 0} />

        {sqetchs.map((sqetch: string) => (

            <div className="cursor-pointer w-full py-4 border-dotted border-2 border-n-2 flex flex-row items-center rounded-md gap-4 p-2 items-start">
                <div className=""><MdOutlinePushPin className="w-[40px] h-[40px]" /></div>
                <h5 className="h4 text-n-5"> {sqetch} </h5>
            </div>
        ))}

    </div>
}

export default Sqetch