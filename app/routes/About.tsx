import { json, type MetaFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTranslationFunctionBasedOnHost } from "~/i18n.server";

export async function loader({ request }: LoaderFunctionArgs) {
    const t = await getTranslationFunctionBasedOnHost(request);
    const TITLE_ABOUT = t("TITLE_ABOUT");
    const DESCRIPTION_ABOUT = t("DESCRIPTION_ABOUT");

    const headers = { "Cache-Control": "max-age=86400" }; // One day

    return json({
        DESCRIPTION_ABOUT, TITLE_ABOUT
    }, { headers });
}


export const meta: MetaFunction<typeof loader> = ({ data }) => {
    if (data) {
        const {DESCRIPTION_ABOUT, TITLE_ABOUT} = data;
        return [
            { title: TITLE_ABOUT },
            { name: "description", content: DESCRIPTION_ABOUT },
        ];
    } else {
        return [
            { title: "Couldn't load the translations." }
        ];
    }
};

function About() {
    const {DESCRIPTION_ABOUT} = useLoaderData<typeof loader>();
    return (
        <div>{DESCRIPTION_ABOUT}</div>
    );
}

export default About;
