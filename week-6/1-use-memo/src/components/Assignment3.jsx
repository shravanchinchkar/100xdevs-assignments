import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Mobile Cover", value: 100 },
    { name: "Mini bag", value: 350 },
  ]);

  // Your code starts here
  let totalValue = useMemo(() => {
    let value = 0;
    const onlyPrice = items.map((item) => {
      return item.value;
    });
    for (let i = 0; i < onlyPrice.length; i++) {
      value = value + onlyPrice[i];
    }
    return value;
  }, [items]);

  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: ${totalValue}</p>
    </div>
  );
};
