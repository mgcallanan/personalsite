import React from "react"
import favicon from "./images/favicon.ico"

interface HTMLProps {
  htmlAttributes: { [key: string]: any }
  headComponents: React.ReactNode[]
  bodyAttributes: { [key: string]: any }
  preBodyComponents: React.ReactNode[]
  body: string
  postBodyComponents: React.ReactNode[]
}

const HTML: React.FC<HTMLProps> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://use.typekit.net/dkh6gwj.css" />
        <link rel="icon" type="image/png" href={favicon} />
        {headComponents}
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
      <body {...bodyAttributes}>
        <div className="overflow_wrapper">
          {preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </div>
      </body>
    </html>
  )
}

export default HTML
