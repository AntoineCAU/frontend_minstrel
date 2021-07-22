import styled from 'styled-components';

const SBio = styled.div`
  .biography {
    width: 100vw;
    margin-top: 100px;
    text-align: center;
    font-family: 'Fjalla One', serif;
    h1 {
      font-size: 40px;
      padding: 50px;
      text-align: center;
      color: #036770;
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
      p {
        width: 80%;
        text-decoration: none;
        line-height: 2;
        text-align: justify;
        text-justify: inter-word;
        hyphens: auto;
      }
      img {
        border-radius: 5px;
        width: 50%;
        filter: grayscale(10) opacity(80%);
        float: right;
        margin: 0 0px 15px 15px;
      }
    }
  }
`;

export default SBio;
