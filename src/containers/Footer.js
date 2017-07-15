var React = require('react')

function Footer(props) {
		return (
      <footer className="footer cf" role="contentinfo">
        <div className="wrap wide">

          <p className="footer-copyright">copyright component</p>

          <p className="footer-madewithkirby">
            <a href="http://getkirby.com/made-with-kirby-and-love">Made with Kirby and <b className="heart">♥</b></a>
          </p>

        </div>
      </footer>
		)
}

module.exports = Footer
