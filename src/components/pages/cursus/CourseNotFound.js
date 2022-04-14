import Header from "../../layout/header/Header"

export default function CoursenNotFound() {
    return (
      <Header
        title={"Cursus onder ontwikkeling"}
        buttonPrimary={"https://willehad-nine.vercel.app/cursus-aanbod"}
        headerButtonName="cursus aanbod"
        url={
          "https://images.unsplash.com/photo-1565982238447-4f91b443c942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        }
        viewHeight={100}
        textCol="12"
        modal={false}
      ></Header>
    );
}