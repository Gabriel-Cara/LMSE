import { Button } from '@/components/Button';

interface Props {
    blackCardTitle: string;
    list: string[];
    btnTitle: string;
}

export function CardService({ blackCardTitle, list, btnTitle }: Props) {
    return (
        <div className="w-screen lg:w-1/2 flex justify-center first:mt-0 mt-10 lg:mt-0">
            <div className="flex flex-col gap-4 p-4 bg-white shadow-xl shadow-zinc-600 w-4/5 lg:w-1/2 h-full rounded-lg">
                <h1 className="flex w-fit py-2 px-4 relative -top-10 -left-10 bg-black rounded-lg text-white overflow-hidden">{blackCardTitle}</h1>
                <ul className="text-center my-auto">
                    {
                        list.map((item) => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
                <Button name={btnTitle} custom="self-center mt-auto"/>
            </div>
        </div>
    )

}