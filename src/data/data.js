export const getProducts = async () => {
    const res = await fetch('https://api.jsonbin.io/v3/qs/67a6c87be41b4d34e4860ebd')
    return res.json();
};