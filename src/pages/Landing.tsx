import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-white text-center">
        Bienvenidos a mi app c:
      </h1>
      <p className="text-white text-center mt-4 text-lg max-w-lg">
        Además de las funcionalidades esperadas, he implementado un CRUD para la
        lista de todos, utilizado <strong>React Router</strong> de manera
        básica, además de <strong>Shadcn</strong> para los componentes{" "}
        <strong>Dialog</strong> y <strong>Button</strong>. También se incluyen
        pruebas unitarias en los componentes más relevantes para asegurar su
        correcto funcionamiento.
      </p>
      <Link to="/todos" className="text-white hover:text-gray-300 mt-6">
        <Button
          variant="ghost"
          type="submit"
          className="bg-teal-500 text-gray-900 hover:bg-teal-600"
        >
          Ir a la app
        </Button>
      </Link>
    </div>
  );
}

export default Landing;
