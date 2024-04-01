"use server"
import { readFile } from 'data-forge'
import 'data-forge-fs';

export async function useGetNouns(quantity: number){
    const df = await readFile('./public/nounlist.csv').parseCSV();
    const rowCount = df.count();

    const randomNoun = () => {
        const i = Math.floor(Math.random() * rowCount); // Utilizamos Math.floor para obtener un valor entero dentro del rango válido.
        return df.at(i).ATM;
    } 

    const nouns = [];
    for (let i = 0; i < quantity; i++) {
        nouns.push(randomNoun());
    }

    return nouns;
}