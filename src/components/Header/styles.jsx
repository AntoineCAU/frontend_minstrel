import styled from 'styled-components';

const SHeader = styled.div`
  .header {
    width: 100vw;
    height: 80px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #85b8b7;
    border-bottom: #036770 solid 1px;
    .logo {
      height: 75px;
    }
    .pages {
      display: flex;
      align-items: center;
      list-style-type: none;
      li {
        padding: 30px;
        a {
          border-radius: 3px;
          padding: 10px;
          color: #ffff;
          text-decoration: none;
          font-size: 20px;
          font-family: 'roboto', sans-serif;
          :hover {
            transition: 0.5s;
            color: #85b8b7;
            background-color: #ffff;
          }
        }
      }
    }
  }
`;

export default SHeader;
