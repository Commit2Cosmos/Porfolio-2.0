import Form from "./form";
import Button from "@/button";


export default function Contact() {
    return (
        <section id="contact-section">
            <h2>Leave a comment</h2>
            <Form />
            <Button text={"Share message"} btnClass={""} />
        </section>
    );
}