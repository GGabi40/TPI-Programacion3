import React, { useContext, useEffect, useState } from 'react';

import { useFetch } from '../../hook/useFetch';
import { AuthenticationContext } from '../../services/auth.context';
import { successToast } from '../../toast/NotificationToast';

const CommentList = ({ reviewId }) => {
    const { token, userId } = useContext(AuthenticationContext);
    const { getAll, put, del } = useFetch(`/comments/${reviewId}`);
    const [comments, setComments] = useState([]);
    const [editingComment, setEditingComment] = useState(null);
    const [editedContent, setEditedContent] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            const allComments = await getAll(token);
            console.log("Comentarios recibidos:", allComments);
            setComments([allComments]);
        }

        fetchComments();
    }, [reviewId]);

    //agregue esto
    const handleEdit = (comment) => {
        setEditingComment(comment.id);
        setEditedContent(comment.content);
    };

    const handleCancel = () => {
        setEditingComment(null);
        setEditedContent("");
    };

    const handleSave = async (commentId) => {
        const result = await put({ content: editedContent }, commentId, token);
        if (result && !result.error) {
            successToast("Comentario editado exitosamente");
            setComments((prev) =>
                prev.map((comment) =>
                    comment.id === commentId ? { ...comment, content: editedContent } : comment
                )
            );
            setEditingComment(null);
        } else {
            alert("No se pudo editar el comentario");
        }
    };

    const handleDelete = async (commentId) => {
        const result = await del(commentId, token);
        if (result?.success) {
            successToast("Comentario eliminado");
            setComments((prev) => prev.filter((c) => c.id !== commentId));
        } else {
            alert("No se pudo eliminar el comentario");
        }
    };
    //hasta aca


    return (
        <div className='comment.list'>
            <h6>Comentarios</h6>
            {comments.length === 0 ? (
                <p>No hay comentarios aún.</p>
            ) : (
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <p><strong>{comment.user?.username}</strong></p>
                            
                            {/* aca agregue esto */}
                            {editingComment === comment.id ? (
                                <>
                                    <textarea
                                        value={editedContent}
                                        onChange={(e) => setEditedContent(e.target.value)}
                                    />
                                    <button onClick={() => handleSave(comment.id)}>Guardar</button>
                                    <button onClick={handleCancel}>Cancelar</button>
                                </>
                            ) : (
                                <p>{comment.content}</p> // esta linea estaba
                            )}

                            {userId === comment.user?.id && (
                                editingComment === comment.id ? null : (
                                    <>
                                        <button onClick={() => handleEdit(comment)}>Editar</button>
                                        <button onClick={() => handleDelete(comment.id)}>Eliminar</button>
                                    </>
                                )
                            )}

                            {/* aca agregue esto */}

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CommentList;