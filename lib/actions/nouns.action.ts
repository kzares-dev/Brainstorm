"use server";

export async function useGetNouns(quantity: number): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
        setTimeout(() => {
            const nouns = ["Dog", "Cat", "Chair", "Book", "Table", "Car", "Computer", "Phone", "House", "Tree"];
            resolve(nouns);
        }, 2000); 
    });
}