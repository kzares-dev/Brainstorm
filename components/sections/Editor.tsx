import Image from "next/image"
import ContainerHead from "../shared/ContainerHead"
import generate from "@/public/icons/generate.svg"
import GeneratedWords from "./GeneratedWords"

const Editor = () => {
    return (
        <section className="bg-gray-50 min-h-[20vh] shadow-md  border-1 rounded-md border-slate-600 flex flex-col gap-3" >
            <ContainerHead text="Search for inspiration" />

            <div className="flex items-center justify-between w-full px-3">

                <div className="p-4 rounded-lg">
                    <label className="text-gray-600 text-lg font-code font-bold">
                        How many random words do you want?
                    </label>
                    <div className="relative mt-2 max-w-xs text-gray-500">
                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-slate-700 pr-2">
                            <span className="text-sm outline-none rounded-lg h-full">
                                nouns
                            </span>
                        </div>
                        <input type="number" placeholder="10" className="w-full pl-[4.5rem] pr-3 py-3 appearance-none bg-transparent outline-none border-2 border-n-3 focus:border-slate-600 shadow-sm rounded-lg" />
                    </div>
                </div>

                <button className="flex flex-row items-center gap-3 bg-[#EFBC9B]/80 border border-slate-500 shadow-md px-4 py-3 rounded-md">
                    
                    <span className="font-sora text-2xl font-bold font-code text-n-7">generate</span>

                    <Image
                        width={30}
                        height={30}
                        alt=""
                        src={generate}
                    />

                </button>

            </div>


            <GeneratedWords />


        </section>
    )
}

export default Editor