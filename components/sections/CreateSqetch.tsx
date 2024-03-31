"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PiFoldersFill } from "react-icons/pi"
import { SelectWords } from "../shared/SelectWords"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { useRef } from "react";

const CreateSqetch = ({ noSqetchs, nouns, addSqetch }: { noSqetchs: boolean, nouns: string[], addSqetch: (newSqetch: string) => void }) => {

    const sqetchRef = useRef<any>(null);

    return <Dialog>
        <DialogTrigger className="w-full">
            {noSqetchs ?
                <div className="w-full py-4 border-dotted border-2 border-n-5 flex flex-col items-center rounded-md">
                    <PiFoldersFill className="w-full h-[400px]" />

                    <h3 className="h3"> Click to create a sqetch </h3>
                </div> : <div className="">
                    <div className="cursor-pointer w-full py-4 border-dotted border-2 border-n-5 flex flex-row items-center rounded-md gap-4 px-2">
                        <PiFoldersFill className="w-[40px] h-[40px]" />

                        <h3 className="h4"> Click to create a sqetch </h3>
                    </div>
                </div>}
        </DialogTrigger>


        <DialogContent className="bg-white">
            <DialogHeader className="flex flex-col gap-3">
                <h1 className="h3">Create a Sqetch</h1>
                <Textarea ref={sqetchRef} placeholder="Describe your idea..." className="placeholder:text-n-4" />
                {/* <SelectWords nouns={nouns} />*/}

                <DialogTrigger>
                    <Button className="h3" onClick={() => addSqetch(sqetchRef?.current?.value )}> Create Sqetch </Button>
                </DialogTrigger>

            </DialogHeader>
        </DialogContent>
    </Dialog>
}

export default CreateSqetch