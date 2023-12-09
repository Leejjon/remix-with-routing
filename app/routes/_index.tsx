import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Home sweet home." },
  ];
};

export default function Index() {
  return (
      <div>Home sweet home.</div>
  );
}
