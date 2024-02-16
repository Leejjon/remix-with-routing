import {json, type LoaderFunctionArgs, type MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {getCountryCode, getTranslator} from "~/i18n";

export async function loader({request}: LoaderFunctionArgs) {
    const t = getTranslator(getCountryCode(request));
    const TITLE_NEWS = t("TITLE_NEWS");
    const DESCRIPTION_NEWS = t("DESCRIPTION_NEWS");

    const headers = {"Cache-Control": "max-age=86400"}; // One day

    return json({
        DESCRIPTION_NEWS, TITLE_NEWS
    }, {headers});
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    if (data) {
        const {TITLE_NEWS, DESCRIPTION_NEWS} = data;
        return [
            {title: TITLE_NEWS},
            {name: "description", content: DESCRIPTION_NEWS},
        ];
    } else {
        return [
            {title: "Couldn't load the translations."}
        ];
    }
};

function News() {
    const {DESCRIPTION_NEWS} = useLoaderData<typeof loader>();
    return (
        <div>{DESCRIPTION_NEWS}</div>
    );
}

export default News;
