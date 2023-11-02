export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, image, age } = data;
  console.log(data);

  return (
    <main>
      <h1>{data.name}</h1>
      <img className="w-28" src={image.url} alt="" />
      <p>
        {name}'s Favorite color is <strong>{data.favouriteColor}</strong>
      </p>
    </main>
  );
}
