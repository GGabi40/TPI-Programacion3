import { User } from "../models/User.js";


// Muestra todos los usuarios -- solo superadmin
export const getAllUsers = async (req, res) => {
    const { role } = req.user;

    if (role !== 'superadmin') {
        return res.status(403).json({ message: 'No tienes permisos para eliminar usuarios' });
    }

    const users = await User.findAll({
        attributes: { exclude: ['password'] } // evita mostrar password
    });

    if (!users) return res.status(404).json({ message: 'No se encontraron usuarios' });

    res.status(200).json(users);
};


// DELETE - Borra un usuario
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.user;

        if (role !== 'superadmin') {
            return res.status(403).json({ message: 'No tienes permisos para eliminar usuarios' });
        }

        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] }
        });

        if (!user) return res.status(404).json({ message: 'Usuario no encontrado ' });

        user.destroy();
        res.json({ message: `Usuario de id ${id} eliminado.` });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

