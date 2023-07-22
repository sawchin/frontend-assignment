export default async function Fetchdata() {
  const pdata = await fetch("https://fakestoreapi.com/products");
  console.log(pdata);
  return pdata.json();
}
