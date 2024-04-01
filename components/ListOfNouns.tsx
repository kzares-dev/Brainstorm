"use client"
import Loader from "./shared/Loader";
import { useEffect, useRef, useState } from "react";
import { useGetNouns } from "@/lib/actions/nouns.action";

const ListOfNouns = ({ togglePress, quantity }: { togglePress: boolean, quantity: number }) => {

    // this function is to when the words are loaded then the screen make scroll to top
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollRef = useRef<HTMLDivElement>(null);
    const [nouns, setNouns] = useState<string[]>([]);
    const getNouns = () => {
        setNouns([]);
        useGetNouns(quantity)
            .then((response) => {
                setNouns(response);
                //scrollToRef(scrollRef);
            })
    }

    useEffect(() => {
        getNouns();
    }, [togglePress])

    function getRandomElements() {
        // Get two different random indices
        let index1 = Math.floor(Math.random() * nouns.length);
        let index2 = Math.floor(Math.random() * nouns.length);

        while (index2 === index1) {
            index2 = Math.floor(Math.random() * nouns.length);
        }

        // Return the two elements corresponding to the random indices
        return [nouns[index1], nouns[index2]];
    }

    const randomElements = getRandomElements();

    if(nouns.length === 0) return "loading"

    return (
        <div className="flex-1 h-auto  bg-gray-50 py-5 px-2">

            <div className="border bg-white px-2 py-4 rounded-md border-n-2">
                <h2 className="h2"> Have no ideas?</h2>
                <div className="flex flex-row items-center">
                    <p className="h5"> Try something related to  <span className="text-[#EFBC9B] font-bold underline"> {randomElements[0]} </span> and <span className="text-[#EFBC9B] font-bold underline"> {randomElements[1]} </span> </p>

                </div>
            </div>

            <div className="p-4 gap-4 lg:gap-10 flex flex-col">
                {nouns.length === 0 && <div>
                    <Loader />
                </div>}

                {nouns.map((word: string) => (
                    <span className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[5.25rem] lg:leading-[4.0625rem] xl:text-[6.75rem] xl:leading-[5.5rem] text-n-6" key={word}>{word}</span>
                ))}
            </div>

        </div>
    )
}

export default ListOfNouns
