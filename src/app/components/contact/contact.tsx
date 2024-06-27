import Form from "./form";


/**
 * Renders the Contact section with a form.
 *
 * @return {JSX.Element} The Contact section component.
 */
export default function Contact(): JSX.Element {
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