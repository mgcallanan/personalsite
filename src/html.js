import React from "react"
import PropTypes from "prop-types"
import favicon from "./images/favicon.ico"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://use.typekit.net/dkh6gwj.css"/>
        <link rel="icon" type="image/png" href={favicon}/>
        {props.headComponents}
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-B5YDNJS4B8"
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B5YDNJS4B8');
            `,
            }}
        />
      </head>
      <body {...props.bodyAttributes}>
        <div className="overflow_wrapper">
          {props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
