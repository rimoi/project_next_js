import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
    <>
        <main>
            {children}
        </main>
        <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    </>
);

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;
