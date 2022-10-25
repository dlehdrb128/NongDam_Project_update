import axios from "axios";

export const getProductData = async (params, loading, data, navigate) => {
  loading(true);
  try {
    let response = await axios.get(
      `http://localhost:8080/product/search/${params.params}/${params.sort}`
    );
    data(response.data);
    navigate(`/product/${params.params}`);
  } catch (error) {
    console.log(error);
  }
  loading(false);
  setTimeout(() => {}, 100);
};

export const price = (type, price, count = 0, percent = 0) => {
  switch (type) {
    case "sale":
      return (
        Math.round((price - (price * percent) / 100) / 10) * 10
      ).toLocaleString();

    case "total":
      return (Math.round(price / 10) * 10 * count).toLocaleString();

    default:
      return (Math.round(price / 10) * 10).toLocaleString();
  }
};
