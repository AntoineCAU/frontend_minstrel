import styled from 'styled-components';

const SHeader = styled.div`
  .header {
    width: 100vw;
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: black solid 2px;
    .logo {
      height: 90px;
    }
    .pages {
      padding: 30px;
      display: flex;
      align-items: center;
      list-style-type: none;
    }
  }
`;

export default SHeader;
