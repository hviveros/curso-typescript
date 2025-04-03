import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Funciones get
app.get('/hola', (req, res) => {
        res.json({ message: 'Hola Mundo',});
    }
);

// POST - Crear datos
app.post('/recursos', (req, res) => {
// Lógica para crear un recurso
});

// PUT - Actualizar datos
app.put('/recursos/:id', (req, res) => {
// Lógica para actualizar un recurso
});

// DELETE - Eliminar datos
app.delete('/recursos/:id', (req, res) => {
// Lógica para eliminar un recurso
});

// Funcion listen (escuchar)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} from API Express TS`);
}
);

// Función para obtener la fecha actual
const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleString();
}
console.log('Fecha y hora actual', getCurrentDate());