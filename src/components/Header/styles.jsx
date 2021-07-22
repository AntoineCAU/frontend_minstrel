import styled from 'styled-components';

const SHeader = styled.div`
  .header {
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e2eeea;
    border-bottom: #036770 solid 1px;
    .logo {
      height: 50px;
      padding: 20px;
    }
    .pages {
      display: flex;
      align-items: center;
      list-style-type: none;
      li {
        padding: 30px;
        a {
          padding-left: 10px;
          color: #036770;
          text-decoration: none;
          font-size: 17px;
          font-family: 'Fjalla One', serif;
          border-left: transparent solid 4px;
          :hover {
            border-left: #036770 solid 4px;
          }
        }
      }
    }
  }
`;

export default SHeader;
