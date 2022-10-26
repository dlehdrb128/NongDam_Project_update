import FivedaysMarketsec2conwrapper from "./FivedaysMarketsec2conwrapper";

const FivedaysMarketsec2 = ({ data }) => {
  const Productdata = data[0]
  //지역 데이터 선별 함수
  const LocalFilter = (local1, local2) => {
    if (typeof local1 === 'string' && typeof local2 === 'string') { // 인자는 스트링으로 받아야함
      let localdata = Productdata.filter((value) => {
        if (value.product_local === local1 || value.product_local === local2) { // 인자로 받는 지역 데이터만 솔팅
          return value;
        }
      });
      return localdata;
    }
  }

  return (
    <>
      <FivedaysMarketsec2conwrapper marignbt={'180px'} data={LocalFilter('충북', '충남')} title={({ theme }) => theme.orange} local={'충청'} brcol={({ theme }) => theme.orange}></FivedaysMarketsec2conwrapper>
      <FivedaysMarketsec2conwrapper marignbt={'0'} data={LocalFilter('충북', '충남')} title={({ theme }) => theme.green} local={'전라'} brcol={({ theme }) => theme.green}></FivedaysMarketsec2conwrapper>
    </>
  );
};
//end

export default FivedaysMarketsec2;
