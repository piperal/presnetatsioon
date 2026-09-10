async function getProducts() {
    
    const itemNum  = 1

    try {
        const res = await fetch(`https://fakestoreapi.com/products/${itemNum}`);

        if (!res.ok) {
            throw new Error(`Error! Status: ${res.status}`);
        }

        const json = await res.json();

        console.log(json);
    } catch (err) {
        console.log(err);
    }
}

getProducts();
