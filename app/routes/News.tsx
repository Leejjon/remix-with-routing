import type { MetaFunction } from "@remix-run/node";

const title = "News";
const description = "The latest news."

export const meta: MetaFunction = () => {
    return [
        { title: title },
        { name: "description", content: description },
    ];
};

function News() {
    return (
        <div>{description}</div>
    );
}

export default News;
