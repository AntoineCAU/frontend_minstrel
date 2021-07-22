import SFooter from './styles';

function Header() {
  return (
    <SFooter>
      <div className="footer">
        <div className="socialnetwork">
          <a
            href="https://www.facebook.com/Minstrelofficiel"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../img/facebookLogo.svg"
              alt=""
              className="facebooklogo"
            />
          </a>
        </div>
        <div className="socialnetwork">
          <a
            href="https://www.instagram.com/minstrelofficiel/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../img/instagramLogo.svg" alt="" />
          </a>
        </div>
        <div className="socialnetwork">
          <a
            href="https://soundcloud.com/thibautdaste"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../img/soundcloudLogo.svg" alt="" />{' '}
          </a>
        </div>
      </div>
    </SFooter>
  );
}
export default Header;
