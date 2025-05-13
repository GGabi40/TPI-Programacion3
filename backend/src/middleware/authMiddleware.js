import jwt from 'jsonwebtoken';


// Verifica que haya un token disponible
export const verifyToken = (req, res, next) => {
    // Obtiene el valor del header "Authorization" de la solicitud, sino hay: cadena vacía
    const header = req.header("Authorization") || "";

    const token = header.split(" ")[1]; // extrae token desde header

    if(!token) return res.status(401).json({ message: 'Token no provisto.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // le pasa el role, id...

        next();
    } catch (error) {
        console.error('Token inválido: ', error);
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
}


// control de roles, para proteger las rutas dependiendo del rol
export const roleMiddleware = (roles) => (req, res, next) => {
    if(!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Acceso denegado, no tienes permiso para esta acción' })
    }

    next(); // si el rol es valido, se pasa a la siguiente funcion
};
