import { describe,test } from "@jest/globals";
import { contarCoincidenciasEnCadena } from "../../src/app/cadenas";


describe("Bateria de pruebas cadenas",()=> {
    test("Probar match completo",()=>{
        let resultado = contarCoincidenciasEnCadena("factorial","factorial")
        expect(resultado).toBe(1);
    });

    test("Probar match parcial",()=>{
        let resultado = contarCoincidenciasEnCadena("hogar","hora")
        expect(resultado).toBe(0);
    });

    test("Probar match",()=>{
        let resultado = contarCoincidenciasEnCadena("hogar","hora")
        expect(resultado).not.toBe(1);
    });
});