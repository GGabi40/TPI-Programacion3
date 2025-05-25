import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export const showConfirmAlert = () => {
    Swal.fire({
        title: "¿Realmente quieres eliminar este club?",
        text: "Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Eliminado!",
                text: "Has eliminado el club.",
                icon: "warning"
            });
        }
    });
};
