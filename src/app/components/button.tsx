type ButtonProps = {
    text: string,
    btnClass: string
}


export default function Button(props: ButtonProps) {

    const { text, btnClass } = props

    return (
        <button className={btnClass}>
            { text }
        </button>
    )
}