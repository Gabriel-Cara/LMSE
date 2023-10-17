interface Props {
    name: string;
    reverse?: boolean;
    custom?: string;
}

const style = "w-fit font-bold text-3xl text-stone-700 mx-2 my-4 after:block after:relative after:bg-sky-400 after:h-px after:w-2/5"

export function Topic({ name, reverse, custom }: Props) {
    return <h1 className={
        reverse === true ? 
        `${style} ml-auto after:ml-auto ${custom}` :
        `${style} mr-auto after:mr-auto ${custom}`
    }>{name}</h1>
}