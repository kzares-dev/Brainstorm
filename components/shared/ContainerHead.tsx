
export default function ContainerHead({ text }: {text?:string}) {
    const boxs = [
        {
            color: "bg-red-500",
        },
        {
            color: "bg-yellow-500",
        },
        {
            color: "bg-green-500",
        },
    ];
    return (
    <div>
            <div className="text-gray-300 w-full mx-auto border-x-2 border-t-2 border-slate-800 rounded-t-md bg-[#EFBC9B]/90 p-2 flex items-center">
                <div className="flex gap-2">
                    {boxs.map(({ color }, index) => {
                        return (
                            <div
                                key={index}
                                className={`w-3 h-3 ${color} rounded-full`}
                            ></div>
                        );
                    })}
                </div>
                <div className="flex-1 mr-16 flex justify-center items-center">
                    <div className="flex items-center gap-1">
                        <h1 className="text-center"> {text} </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
