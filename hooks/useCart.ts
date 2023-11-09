import { useEffect, useState } from "react"

export const useCart = () => {
    const [cart, setCart] = useState<Array<string>>([])
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        let savedValue = localStorage.getItem('cart');
        if (savedValue) {
            setCart(JSON.parse(savedValue));
          } else {
            localStorage.setItem('cart', JSON.stringify(cart));
          }
          setFirstRender(false);
    }, []);

    useEffect(() => {
        if (firstRender) return;
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, firstRender]);

    return [cart, setCart];
}