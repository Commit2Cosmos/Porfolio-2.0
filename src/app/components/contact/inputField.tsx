type InputProps = {
    name: string,
    placeholder: string
}


export default function Input(props: InputProps) {

    const { name, placeholder } = props;

    return (
        <label>
            { name }
            <input type="text" name={name.toLowerCase()} placeholder={placeholder} />
        </label>
    );
}