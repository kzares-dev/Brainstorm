"use client"
import { useState } from "react";
import CreateSqetch from "./CreateSqetch";

const Sqetch = ({ nouns }: { nouns: string[] }) => {

    const [sqetchs, setSqetchs] = useState<string[]>([]);
    const addSqetch = (newSqetch: string) => {
        setSqetchs((prevState: string[]) => [...prevState, newSqetch] )
    }

    console.log(sqetchs)


    return <div className="py-4">
        <CreateSqetch 
        addSqetch={addSqetch}
        nouns={nouns} 
        noSqetchs={sqetchs.length === 0} />

        {/*-- Here goes the created sqetchs --*/}

    </div>
}

export default Sqetch