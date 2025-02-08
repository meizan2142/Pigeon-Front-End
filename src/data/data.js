export const getProducts = async () => {
    const res = await fetch('https://api.jsonbin.io/v3/qs/67a6e5c9ad19ca34f8fbe8e4')
    return res.json();
};