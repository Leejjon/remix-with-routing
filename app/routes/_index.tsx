import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {getCountryCode, getTranslator} from "~/i18n";

export async function loader({request}: LoaderFunctionArgs) {
  const t = getTranslator(getCountryCode(request));
  const TITLE_HOME = t("TITLE_HOME");
  const DESCRIPTION_HOME = t("DESCRIPTION_HOME");

  const headers = { "Cache-Control": "max-age=86400" }; // One day

  return json({
    DESCRIPTION_HOME, TITLE_HOME
  }, {headers});
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
  if (data) {
    const {DESCRIPTION_HOME, TITLE_HOME} = data;
    return [
      { title: TITLE_HOME },
      { name: "description", content: DESCRIPTION_HOME },
    ];
  } else {
    return [
      { title: "Couldn't load the translations." }
    ];
  }
};

export default function Index() {
  const {DESCRIPTION_HOME} = useLoaderData<typeof loader>();
  return (
      <div>{DESCRIPTION_HOME}</div>
  );
}
