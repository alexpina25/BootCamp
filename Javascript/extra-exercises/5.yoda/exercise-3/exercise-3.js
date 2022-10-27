const getOrders = async () => {
  try {
    const rawData = await fetch("http://localhost:3000/orders");
    const jsonData = await rawData.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (productId) => {
  try {
    const rawData = await fetch(`http://localhost:3000/products/${productId}`);
    const jsonData = await rawData.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

const orderOrders = async () => {
  const ulOrders = await getOrders();

  ulOrders.sort(
    (a, b) => new Date(a.date).getDay() - new Date(b.date).getDay()
  );
  return ulOrders;
};

const printOrders = async () => {
  const ul = document.createElement("ul");

  const orders = await orderOrders();

  for (const order of orders) {

    const productsFromOrder = order.products;

    for (const product of productsFromOrder) {
      let productToPrint = await getProduct(product.productId);

      const { quantity } = product;

      ul.innerHTML += `
      <li>Order ID: ${order.id}</li>
      <li>Date: ${order.date}</li>
      <li>Product: ${productToPrint.name}</li>
      <li>Quantity: ${quantity}</li>
    <hr>`;
    }
  }

  document.body.appendChild(ul);
};

printOrders();
