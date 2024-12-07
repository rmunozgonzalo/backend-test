import request from "supertest";
import app from "../src/server.js";


describe("Baterias pruebas server",()=>{

    test("servidor en endpoint /",async()=>{
        return await request(app)
        .get('/')
        .expect(200)
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /api-key",async()=>{
        return await request(app)
        .get('/api-key')
        .expect('la apikey de mi aplicacion es: default-key')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /api-username",async()=>{
        return await request(app)
        .get('/api-username')
        .expect('el username de mi aplicacion es: default')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /validar-rut",async()=>{
        let rutTest = "9231443-k"
        return await request(app)
        .get('/validar-rut?rut='+rutTest)
        .expect('El rut suministrado ('+rutTest+') es : valido')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /validar-rut",async()=>{
        let rutTest = "9231443k"
        return await request(app)
        .get('/validar-rut?rut='+rutTest)
        .expect('El rut suministrado ('+rutTest+') es : valido')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /validar-rut",async()=>{
        let rutTest = "9.231.443k"
        return await request(app)
        .get('/validar-rut?rut='+rutTest)
        .expect('El rut suministrado ('+rutTest+') es : valido')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /validar-rut",async()=>{
        let rutTest = "9231443-3"
        return await request(app)
        .get('/validar-rut?rut='+rutTest)
        .expect('El rut suministrado ('+rutTest+') es : invalido')
        //.expect("Content-Type",/json/)
    })

    test("servidor en endpoint /buscar-subcadena",async()=>{
        let cadena1 = "hola_mundo"
        let subcadena = "hola"
        let cantidadRepeticiones = 1
        return await request(app)
        .get(`/buscar-subcadena?cadena=${cadena1}&subcadena=${subcadena}`)
        .expect(`La cadena "${cadena1}" tiene ${cantidadRepeticiones} repeticiones de la subcadena "${subcadena}"`)
        //.expect("Content-Type",/json/)
    })
})