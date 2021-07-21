import styled from 'styled-components';

const SHeader = styled.div`
  .header {
    width: 100vw;
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff;
    border: black solid 2px;
    .logo {
      height: 90px;
    }
    .pages {
      display: flex;
      align-items: center;
      list-style-type: none;
      li {
        padding: 30px;
        a {
          color: #85b8b7;
          text-decoration: none;
          font-family: 'roboto', sans-serif;
        }
      }
    }
  }
`;

export default SHeader;
