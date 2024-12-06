export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className="flex flex-col">
        <h1 className="text-4xl text-black">Products</h1>
      <div>{id}</div>
    </div>
  );
}
