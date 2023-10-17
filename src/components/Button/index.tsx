interface Props {
    name: string;
    custom?: string;
    type?: "DEFAULT" | "COMIC" | "DARK";
}

const COMIC = "inline-block px-4 py-2 font-bold text-white text-center bg-sky-500 border-2 border-black shadow-[5px_5px_0px_#000] rounded-xl mx-auto hover:bg-white hover:text-sky-500 hover:border-sky-500 hover:shadow-sky-500 active:bg-sky-400 active:text-white active:shadow-none active:transform-[translateY(4px)] duration-300";
const DARK = "relative border-2 hover:text-white text-sky-400 border-sky-400 px-4 py-2 rounded-full after:block after:absolute after:z-[0] after:-bottom-10 after:-left-10 after:w-2 after:h-2 after:rounded-full hover:after:scale-[100] overflow-hidden after:bg-sky-400 after:duration-1000 hover:shadow-[1px_1px_200px_#252525] hover:border-none duration-1000";
const DEFAULT = "px-4 py-2 bg-sky-400 text-white text-center font-bold rounded-full hover:bg-sky-300 hover:shadow-[1px_1px_200px_#252525] duration-500";
const SPAN = "z-10 relative font-bold"

export function Button({ name, custom, type = "DEFAULT" }: Props) {
    if (type === "COMIC") {
        return <button className={`${COMIC} ${custom}`}>{name}</button>
    } else if (type === "DARK") {
        return <button className={`${DARK} ${custom}`}><span className={SPAN}>{name}</span></button>
    } else {
        return <button className={`${DEFAULT} ${custom}`}>{name}</button>
    }
}