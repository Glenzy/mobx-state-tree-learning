const InitialState = () => {
    let initialState = {
        items: [
            {
                name: "LEGO Mindstorms EV3",
                price: 349.95,
                image: "https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg"
            },
            {
                name: "Miracles - C.S. Lewis",
                price: 12.91,
                image:
                    "https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg"
            }
        ]

    }

    if (localStorage.getItem("wishlistApp")) {
        const item = localStorage.getItem("wishlistApp");
        initialState = item && JSON.parse(item);
    }

    return initialState;
}
export default InitialState;

