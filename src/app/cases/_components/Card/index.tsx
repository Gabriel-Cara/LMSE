import Image, { StaticImageData } from 'next/image';

interface ICard {
    image: StaticImageData;
    title: string;
    description: string;
    contain?: boolean
}

export function Card({ image, title, description, contain}: ICard) {
 
    const styleImg = "w-full h-full brightness-75 rounded-lg group-hover:brightness-100 group-hover:cursor-zoom-in transition ease-in-out duration-500"

    return (
        <div className="w-[30vw] h-[30vh] flex-grow basis-[400] overflow-hidden group duration hover:scale-[1.05]">
            <Image
                className={ contain === true ? `object-contain ${styleImg}` : `object-cover ${styleImg}`}
                src={image}
                alt={`${title} - ${description}`}
            />
            <div className="relative bg-[#121214] text-white p-3 rounded-lg m-4 group-hover:bottom-[15vh]">
                <h1 className="font-bold text-lg">{title}</h1>
                <p className="font-medium opacity-75">{description}</p>
            </div>
        </div>
    )
}