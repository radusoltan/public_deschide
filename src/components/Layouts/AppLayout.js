import Navigation from "../Navigation"



const AppLayout = ({children}) => {
  return (
    <div>
      <Navigation />  
      <main>{children}</main>
        
    </div>
  );
}

export default AppLayout