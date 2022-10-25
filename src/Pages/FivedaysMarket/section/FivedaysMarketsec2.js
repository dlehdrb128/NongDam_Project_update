import FivedaysMarketsec2conwrapper from "./FivedaysMarketsec2conwrapper";

const FivedaysMarketsec2 = ({ data }) => {
  const Productdata = data[0]
  const chungchung = Productdata.filter((value) => {
    if (value.product_local === '충남' || value.product_local === '충북') {
      return value
    }
  })
  const Jeonla = Productdata.filter((value) => {
    if (value.product_local === '전북' || value.product_local === '전남') {
      return value
    }
  })
  return (
    <>
      <FivedaysMarketsec2conwrapper marignbt={'180px'} data={chungchung} title={({ theme }) => theme.orange} local={'충청'} brcol={({ theme }) => theme.orange}></FivedaysMarketsec2conwrapper>
      <FivedaysMarketsec2conwrapper marignbt={'0'} data={Jeonla} title={({ theme }) => theme.green} local={'전라'} brcol={({ theme }) => theme.green}></FivedaysMarketsec2conwrapper>
    </>
  );
};
//end

export default FivedaysMarketsec2;
