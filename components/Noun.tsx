"use client";
import { motion } from 'framer-motion'
const Noun = ({ word, idx }: { word: string, idx: number }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: '20px' }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.4, delay: idx/5 }}

            className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[2.25rem] lg:leading-[3.0625rem] xl:text-[5.75rem] xl:leading-[4.5rem] text-n-5 " key={word}
        >{word}</motion.span>
    )
}

export default Noun
