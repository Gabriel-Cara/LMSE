interface Props {
    content: string;
    reverse?: boolean;
}

const style = "mx-8 font-medium text-stone-600 text-lg text-justify text-";

export function Paragraph({ reverse, content }: Props) {
    return(
            <p className={ 
                reverse == true ? 
                `${style}end` :
                `${style}start`
            }>{content}</p>
    )
}