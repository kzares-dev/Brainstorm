import Image from "next/image";
import heroImg from "@/public/static/brainstorm.png"

const Hero = () => {
    return (
        <div  
        className="relative flex flex-col-reverse lg:flex-row mb-[15vh]">
            <div className="flex flex-col gap-2 max-w-[40rem] ">
                <h1 className="h1 text-n-6">Welcome to <span className="outline-4 text-[#EFBC9B] leading-[11rem] flex flex-row">Brain<span className="text-n-6">storm</span></span></h1>
                <h6 className="font-code ">Brainstor is an app that provides a wide range of random words to inspire your creative and innovative projects.  </h6>
            </div>

            <div className="relative flex-1 w-full">
                <div className="lg:absolute w-full top-0 left-0 right-0 h-2/3 bg-[#EFBC9B]  blur-sm -z-1" />
                <Image
                    src={heroImg}
                    width={200}
                    height={200}
                    className="flex-1 lg:absolute w-full "
                    alt=""
                />
            </div>
        </div>
    )
}

export default Hero
