import pool from "../config/db.js"

//crear usuasio s
export async function createUser(req, res) {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: "Datos incompletos"});
        }

        const result = await pool.query(
            "INSERT INTO Users (name, email) VALUES ($1, $2) RETURNING *",
            [name, email]
        );

        const user = result.rows[0]; 
        res.status(201).json(user);
    } catch (error) {
         console.error(error.message );
        res.status(500).json({ error: "Error al crear el usuario"});
    }
}
// listar usuarios
export async function getUsers(req, res){
    try {
        const result = await pool.query( "SELECT *FROM Users");
        res.json(result.rows); 
    } catch (error) {
        res.status(500 ).json({ error: "Error al obtener los usuarios"}); 
    }
}


