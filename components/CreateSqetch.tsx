"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PiFoldersFill } from "react-icons/pi"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { MdEdit } from "react-icons/md";
import { useRef } from "react";

const CreateSqetch = (
    {
        noSqetchs,
        addSqetch,
        edit,
        editSqetch,
        sqetchIdx,
        value,
    }:
        {
            noSqetchs?: boolean,
            addSqetch?: (newSqetch: string) => void,
            edit?: boolean,
            editSqetch?: (index: number, newValue: string) => void,
            sqetchIdx?: number,
            value?: string,
        }
) => {

    const sqetchRef = useRef<any>(null);

    const makeAction = () => {
        if (addSqetch !== undefined) {
            return addSqetch(sqetchRef.current.value);
        } else {
            if (editSqetch === undefined && sqetchIdx !== undefined) return
            
            if(sqetchIdx === undefined) return
            editSqetch(sqetchIdx, sqetchRef.current.value)
        }
    }

    return <Dialog>
        <DialogTrigger className="w-full">
            {edit ? (
                <MdEdit className="w-[30px] h-[30px] cursor-pointer border rounded-md bg-gray-100 border p-1" />
            ) : <>
                {(noSqetchs) ?
                    <div className="w-full py-4 border-dotted border-2 border-n-5 flex flex-col items-center rounded-md">
                        <PiFoldersFill className="w-full h-[400px]" />

                        <h3 className="h3"> Click to create a sqetch </h3>
                    </div> : <div className="">
                        <div className="cursor-pointer w-full py-4 border-dotted border-2 border-n-5 flex flex-row items-center rounded-md gap-4 px-2">
                            <PiFoldersFill className="w-[40px] h-[40px]" />

                            <h3 className="h4"> Click to create a sqetch </h3>
                        </div>
                    </div>}
            </>}


        </DialogTrigger>


        <DialogContent className="bg-white">
            <DialogHeader className="flex flex-col gap-3">
                <h1 className="h3">{edit ? "Edit" : "Create"} sqetch</h1>
                <Textarea defaultValue={value || ''} ref={sqetchRef} placeholder="Describe your idea..." className="placeholder:text-n-4" />


                <DialogTrigger>
                    <Button className="h3" onClick={makeAction}> {edit ? "Edit" : "Create"} Sqetch </Button>
                </DialogTrigger>

            </DialogHeader>
        </DialogContent>
    </Dialog>
}

export default CreateSqetch