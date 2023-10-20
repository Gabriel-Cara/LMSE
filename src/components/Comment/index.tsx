import { Quote } from 'lucide-react'

interface IProps {
    text: string;
}

export function Comment({ text }: IProps) {
    return (
        <div className="bg-blue-200 max-w-[80vw] md:max-w-[40vw] md:h-[30vh] h-fit flex items-center justify-center p-8 rounded-xl">
            <Quote className="relative bottom-20 hidden lg:block" size="48px" fill="#202024" color="#202024" />
            <p>{text}</p>
            <Quote className="relative top-20 hidden lg:block" size="48px" fill="#202024" color="#202024" />
        </div>
    );
}