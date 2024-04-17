type MenuProps = {
    text: string
}


const MenuButton = (props: MenuProps) => {
    return (
        <button>
            {props.text}
        </button>
    )
}

export default function Menu() {
    return (
        <div>
            <MenuButton text="Home" />
            <MenuButton text="About" />
            <MenuButton text="Projects" />
            <MenuButton text="Contact" />
        </div>
    )
}