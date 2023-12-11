import type { MetaFunction } from "@remix-run/node";

const title = "About";
const description = "About us."

export const meta: MetaFunction = () => {
    return [
        { title: title },
        { name: "description", content: description },
    ];
};

function About() {
    return (
        <div>{description}</div>
    );
}

export default About;
