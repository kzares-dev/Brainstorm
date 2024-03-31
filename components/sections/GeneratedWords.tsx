import SquetchIdeas from "./SqetchIdeas";

const GeneratedWords = ({ nouns }: { nouns: string[] }) => {

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

  return (
    <section className="border-t border-neutral-300 flex justify-between min-h-[50vh] flex-row">
      {/*-------- Here goes the selected words ---------*/}
      <div className="flex-1 h-auto p-4 ">

        <div className="border-b">
          <h2 className="h2"> Have no ideas?</h2>
          <div className="flex flex-row items-center">
            <p className="h3"> Build an idea related to  <span className="text-[#EFBC9B] font-bold underline"> {randomElements[0]} </span> and <span className="text-[#EFBC9B] font-bold underline"> {randomElements[1]} </span> </p>

          </div>
        </div>

        <SquetchIdeas nouns={nouns} />

      </div>
      <div className="w-[1px] h-auto bg-neutral-300 gr" />
      {/*-------- Random generated words ---------*/}
      <div className="flex-1 h-auto  bg-gray-100 py-5">

        <div className="p-4 gap-4 lg:gap-10 flex flex-col">
          {nouns.map((word: string) => (
            <span className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[5.25rem] lg:leading-[4.0625rem] xl:text-[6.75rem] xl:leading-[5.5rem] text-n-6" key={word}>{word}</span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default GeneratedWords
