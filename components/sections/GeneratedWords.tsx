const GeneratedWords = ({ nouns }: { nouns: string[] }) => {
  return (
    <section className="border-t border-neutral-300 flex justify-between min-h-[50vh] flex-row">
      {/*-------- Here goes the selected words ---------*/}
      <div className="flex-1 w-full h-auto ">

      </div>
      <div className="w-[1px] h-auto bg-neutral-300 gr" />
      {/*-------- Random generated words ---------*/}
      <div className="flex-1 w-full h-auto  bg-gray-50">

        <div className="p-4 gap-3 flex flex-col">
          {nouns.map((word: string) => (
            <span className="h2 text-n-6" key={word}>{word}</span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default GeneratedWords
