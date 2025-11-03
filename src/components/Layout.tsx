import React from "react"
import Header from "./header"
import Navigation from "./navigation"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "2.5rem",
        position: "relative",
        paddingTop: "clamp(1rem, 5vw, 2.8rem)",
        overflow: "hidden",
      }}
    >
      <Header />
      <Navigation
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <main
        style={{
          width: "100%",
          maxWidth: "100vw",
          padding: "clamp(1rem, 3vw, 2rem)",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
