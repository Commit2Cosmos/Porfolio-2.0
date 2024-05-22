import Form from "./form";


export default function Contact() {
    return (
        <section className="section-template pl-[20%] lg:pl-[38%] pr-[5%]
            flex-col gap-5
            "
            id="contact"
        >
            <h2>Leave a comment</h2>
            <Form />
        </section>
    );
}