import type { MetaFunction } from "@remix-run/node";

const title = "Home";
const description = "Home sweet home."

export const meta: MetaFunction = () => {
  return [
    { title: title },
    { name: "description", content: description },
  ];
};

export default function Index() {
  return (
      <div>{description}</div>
  );
}
