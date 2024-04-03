"use client";
import ContainerHead from "@/components/shared/ContainerHead"
import generate from "@/public/icons/generate.svg"
import SqetchIdeas from "@/components/SqetchIdeas"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGetNouns } from "@/lib/actions/nouns.action";
import ListOfNouns from "../ListOfNouns";
import { getRandomElements } from "@/lib/utils";
import SqetchsModal from "../SqetchsModal";

const MainContent = () => {

    const [quantity, setQuantity] = useState<number>(3);
    const [toggleButton, setToggleButton] = useState<boolean>(false);
    const [nouns, setNouns] = useState<string[]>([]);
    const [randomNouns, setRandomNouns] = useState<string[]>([])


    useEffect(() => {
        useGetNouns(quantity)
            .then((data) => {
                setNouns(data);
                setRandomNouns(getRandomElements(data));
            })


    }, [toggleButton])




    return (
        <section className="bg-gray-50 min-h-[20vh] shadow-md  border-1 rounded-md border-slate-600 flex flex-col gap-3" >
            {/*---- Header of the application ----*/}
            <ContainerHead text="Search for inspiration" />

            {/*---- Words Quantity Selector ----*/}
            <div className="flex items-center flex-col lg:flex-row justify-between w-full px-3">

                <div className="p-4 rounded-lg ">
                    <label className="text-gray-600 text-lg font-code font-bold">
                        How many random words do you want?
                    </label>

                    <div className="relative mt-2 max-w-xs text-gray-500">
                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-slate-700 pr-2">
                            <span className="text-sm outline-none rounded-lg h-full">
                                nouns
                            </span>
                        </div>
                        <input
                            min={2}
                            max={20}
                            value={quantity}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                if (parseInt(e.target.value) < 2) return setQuantity(2);
                                if (parseInt(e.target.value) > 15) return setQuantity(15);
                                setQuantity(parseInt(e.target.value))
                            }}
                            type="number"
                            placeholder="min:2 || max:15"
                            className="w-full pl-[4.5rem] pr-3 py-3 appearance-none bg-transparent outline-none border-2 border-n-3 focus:border-slate-600 shadow-sm rounded-lg" />
                    </div>
                </div>

                <div className="flex w-full lg:w-auto px-5 justify-between items-center">
                    <SqetchsModal />

                    <button
                        onClick={() => setToggleButton(!toggleButton)}
                        className="flex flex-row items-center gap-3 bg-[#EFBC9B]/80 border border-slate-500 shadow-md px-4 py-3 rounded-md">

                        <span className="font-sora text-2xl font-bold font-code text-n-7">generate</span>

                        <Image
                            width={30}
                            height={30}
                            alt=""
                            src={generate}
                        />

                    </button >

                </div>



            </div>


            <div className="border-t border-neutral-300 flex justify-between min-h-[50vh] flex-row h-auto ">
                {/*-------- Here goes the selected words ---------*/}
                <div className="lg:flex-1 hidden lg:block h-full p-4 lg:sw-1/2  ">
                    <SqetchIdeas />

                </div>

                <div className="w-[1px] h-auto bg-neutral-300 " />
                {/*-------- Random generated words ---------*/}
                <div className="lg:w-1/2">
                    <ListOfNouns randomElements={randomNouns} nouns={nouns} />
                </div>


            </div>

        </section>
    )
}


export default MainContent