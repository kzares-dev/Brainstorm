
const ListOfNouns = ({ nouns, randomElements }: { nouns: string[], randomElements: string[] }) => {

    return (
        <div className="flex-1 h-auto  bg-gray-50 py-5 px-2">

            <div className="border bg-white px-2 py-4 rounded-md border-n-2">
                <h2 className="h2"> Have no ideas?</h2>
                <div className="flex flex-row items-center">
                    <p className="h5"> Try something related to  <span className="text-[#EFBC9B] font-bold underline"> {randomElements[0]} </span> and <span className="text-[#EFBC9B] font-bold underline"> {randomElements[1]} </span> </p>

                </div>
            </div>

            <div className="p-4 gap-4 lg:gap-10 flex flex-col">

                {nouns.map((word: string) => (
                    <span className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[2.25rem] lg:leading-[3.0625rem] xl:text-[5.75rem] xl:leading-[4.5rem] text-n-5 " key={word}>{word}</span>
                ))}
            </div>

        </div>
    )
}

export default ListOfNouns
