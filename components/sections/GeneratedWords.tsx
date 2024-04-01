import SquetchIdeas from "./SqetchIdeas";
import ListOfNouns from "../ListOfNouns";

const GeneratedWords = ({ quantity, togglePress }: { quantity: number, togglePress: boolean }) => {


  return (
    <section className="border-t border-neutral-300 flex justify-between min-h-[50vh] flex-row">
      {/*-------- Here goes the selected words ---------*/}
      <div className="flex-1 h-auto p-4 ">
        <SquetchIdeas />

      </div>

      <div className="w-[1px] h-auto bg-neutral-300 gr" />
      {/*-------- Random generated words ---------*/}
      <ListOfNouns
        togglePress={togglePress}
        quantity={quantity}
      />

    </section>
  )
}

export default GeneratedWords
