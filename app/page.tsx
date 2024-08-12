import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Photo from "./components/Photo";

async function getGlobals() {
  return directus.request<{ title: string }>(readItems("global"));
}

async function getItems() {
  return directus.request<{ image: string; id: string; title: string }[]>(
    readItems("gallery", {
      fields: ["image", "id", "title"],
    })
  );
}

export default async function HomePage() {
  const global = await getGlobals();
  const items = await getItems();

  return (
    <div className="container">
      <h1>{global.title}</h1>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <Photo item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
