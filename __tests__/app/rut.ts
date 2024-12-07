import { describe,test } from "@jest/globals";
import { validarRUT } from "../../src/app/rut";

describe("Bateria de pruebas rut",()=> {
    test("Probar validacion positiva",()=>{
        let resultado = validarRUT("17747216-6")
        expect(resultado).toBe(true);
    });

    test("Probar validacion positiva letra",()=>{
        let resultado = validarRUT("9231443-K")
        expect(resultado).toBe(true);
    });

    test("Probar validacion negativa",()=>{
        let resultado = validarRUT("17747216-3")
        expect(resultado).toBe(false);
    });

    test("Verificar numeros",()=>{
        let resultado = validarRUT("923a443-k")
        expect(resultado).toBe(false);
    });

    test("Verificar numeros",()=>{
        let resultado = validarRUT("923a443-k")
        expect(resultado).not.toBe(true);
    });

    test("Verificar largo",()=>{
        let resultado = validarRUT("9")
        expect(resultado).toBe(false);
    });

    test("Verificar numeros",()=>{
        let resultado = validarRUT("46915802-0")
        expect(resultado).toBe(true);
    });
});