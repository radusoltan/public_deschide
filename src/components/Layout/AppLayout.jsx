import NavBar from "../NavBar"

const AppLayout = ({children}) => {
    return <>
    <NavBar />
    <main className="py-20">{children}</main>

    </>
}

export default AppLayout;