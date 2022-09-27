import MainNavigation from "./Main-navigation"

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
