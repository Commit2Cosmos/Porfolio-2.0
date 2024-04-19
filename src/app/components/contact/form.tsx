import Input from "./inputField";



export default function Form() {
    return (
        <form>
            <Input name={"Name"} placeholder={""} />
            <Input name={"Email"} placeholder={""} />
            <Input name={"Phone"} placeholder={""} />
            <Input name={"Message"} placeholder={""} />
        </form>
    );
}