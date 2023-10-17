import Image, { StaticImageData } from "next/image";

import { Paragraph } from "../Paragraph";
import { Topic } from "../Topic";

interface TeamCardProps {
    list: string[]
    name: string
    img: StaticImageData
}

export function TeamCard({ list, name, img }: TeamCardProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-center h-full ">
            <Image className="w-4/5 lg:w-1/4 mt-4" src={img} alt="Profissional" />
            <div className="flex flex-col gap-2 w-[90vw] max-w-[100vw] lg:max-w-[50vw]">
                <Topic name={name} />
                {
                    list.map((item) => (
                        <Paragraph key={item} content={item}/>
                    ))
                }
            </div>
        </div>
    )
}