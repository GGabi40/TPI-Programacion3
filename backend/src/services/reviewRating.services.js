import { ReviewRating } from '../models/ReviewRating.js';
import { Review } from '../models/Review.js';

// POST /review-rating
export const ratingReview = async (req, res) => {
    try {
        const { reviewId, type } = req.body;
        const userId = req.user.id; // agarra de autenticacion

        if(!["like", "dislike"].includes(type)) {
            return res.status(400).json({ message: "Tipo de rating inválido" });
        }

        const review = await Review.findByPk(reviewId);
        if(!review) {
            res.status(404).json({ message: 'La reseña no existe' });
        }

        // Evita que un usuario ponga like en su propia reseña
        if(review.userId === userId) {
            return res.status(403).json({ message: 'No podés votar en tu propia reseña' });
        }

        // Revisa si ya existe un rating del user para esta reseña
        const existingRating = await ReviewRating.findOne({
            where: { userId, reviewId }
        });

        // si existe un rating, lo cambia
        if(existingRating) {
            existingRating.type = type;
            await existingRating.save();
            return res.status(200).json({ message: 'Rating Actualizado.', rating: existingRating });
        }

        const newRating = await ReviewRating.create({ userId, reviewId, type });
        return res.status(200).json({ message: 'Rating registrado', rating: newRating });
    } catch (error) {
        console.error("Error en review-rating:", error);
        return res.status(500).json({ message: "Error del servidor" });
    }
};

// GET /review-rating/:reviewId
export const getRatingById = async (req,res) => {
    try {
        const { reviewId } = req.params;

        // busca reseña
        const review = await Review.findByPk(reviewId);

        if(!review) {
            res.status(404).json({ message: 'La reseña no existe' });
        }

        // cuenta likes y dislikes
        const [likes, dislikes] = await Promise.all([
            ReviewRating.count({ where: { reviewId, type: 'like' } }),
            ReviewRating.count({ where: { reviewId, type: 'dislike' } })
        ])

        return res.status(200).json({
            reviewId,
            likes,
            dislikes,
            total: likes + dislikes
        });

    } catch (error) {
        console.error("Error al obtener rating:", error);
        return res.status(500).json({ error: "Error del servidor" });
    }
};



// DELETE /review-rating/:reviewId
export const deleteReview = async (req,res) => {
    try {
        const userId = req.user.id;
        const { reviewId } = req.params;

        const rating = await ReviewRating.findOne({
            where: { userId, reviewId }
        });

        if(!rating) {
            res.status(404).json({ message: 'No se encontró un rating para eliminar.' });
        }

        await rating.destroy();
        return res.status(200).json({ message: 'Voto eliminado' });
    } catch (error) {
        console.error("Error en review-rating:", error);
        return res.status(500).json({ message: "Error del servidor" });
    }
};