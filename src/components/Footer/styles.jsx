import styled from 'styled-components';

const SFooter = styled.div`
  .footer {
    width: 100vw;
    height: 200px;
    background-color: #e2eeea;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Fjalla One', serif;
    font-size: 17px;
    border-top: #036770 solid 1px;
    .socialnetwork {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px;
      img {
        width: 60px;
        height: 60px;
        filter: invert(29%) sepia(12%) saturate(6275%) hue-rotate(150deg)
          brightness(95%) contrast(98%);
      }
    }
  }
`;

export default SFooter;
