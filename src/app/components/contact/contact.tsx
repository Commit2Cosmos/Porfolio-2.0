import Form from "./form";


export default function Contact() {
    return (
        <section
            id="contact"
            className="w-screen h-[110vh] pl-[20%] lg:pl-[38%] pr-[5%]
            flex flex-col justify-center gap-5
            "
        >
            <h2>Leave a comment</h2>
            <Form />
        </section>
    );
}