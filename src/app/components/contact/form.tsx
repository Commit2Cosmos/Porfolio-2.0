type InputProps = {
    name: string,
    placeholder: string
}


function Input(props: InputProps) {

    const { name, placeholder } = props;

    return (
        <label className="grow">
            <p className="text-sm text-form-grey">{ name }</p>
            <input type="text" name={name.toLowerCase()} placeholder={placeholder}
            className="lighter-border shadow-form-shadow h-16 w-full my-3 px-4"/>
        </label>
    );
}



export default function Form() {
    return (
        <form className="
        flex flex-col gap-4
        ">
            <div className="flex gap-5">
                <Input name={"Name"} placeholder={"Anton Belov"} />
                <Input name={"Email"} placeholder={"anton.belov.al7@gmail.com"} />
            </div>
            <Input name={"Phone"} placeholder={"07999874226"} />
            <label>
                <p className="text-sm text-form-grey">Message</p>
                <textarea 
                name="message"
                className="lighter-border shadow-form-shadow h-32 w-full my-3 px-4 py-3"
                placeholder="Hey, I love your work..."
                ></textarea>
            </label>
        </form>
    );
}