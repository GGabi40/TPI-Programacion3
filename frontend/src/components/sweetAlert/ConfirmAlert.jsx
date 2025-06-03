import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./sweet.css";
import "animate.css";

/* Para Clubs */
export const showConfirmAlert = (id, onDelete) => {
  Swal.fire({
    title: "¿Realmente querés eliminarlo?",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
    text: "Esta acción es irreversible!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar!",
    customClass: {
      title: "swal-title",
      popup: "swal-popup",
      confirmButton: "swal-confirm-btn",
      cancelButton: "swal-cancel-btn",
      content: "swal-content",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete(id);
      Swal.fire({
        title: "¡Eliminado!",
        text: "Lo has eliminado.",
        icon: "success",
      });
    }
  });
};

export const showConfirmFinish = (id, onConfirm) => {
  Swal.fire({
    title: "¿Realmente querés marcar actividad como finalizado?",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
    text: "Esta acción es irreversible!",
    icon: "question",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, finalizar!",
    customClass: {
      title: "swal-title",
      popup: "swal-popup",
      confirmButton: "swal-confirm-btn",
      cancelButton: "swal-cancel-btn",
      content: "swal-content",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm(id);
      Swal.fire({
        title: "Finalizado!",
        text: "Actividad Finalizada.",
        icon: "success",
      });
    }
  });
};


export const showSweetNewActivity = (activityId, onFinish, navigate, clubId) => {
  Swal.fire({
    title: "Ya hay una actividad activa",
    text: "¿Querés finalizarla y crear una nueva?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí, finalizar y crear nueva",
    cancelButtonText: "Cancelar",
    showClass: {
      popup: "animate__animated animate__fadeInUp animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown animate__faster",
    },
    customClass: {
      title: "swal-title",
      popup: "swal-popup",
      confirmButton: "swal-confirm-btn",
      cancelButton: "swal-cancel-btn",
      content: "swal-content",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onFinish(activityId);
      navigate(`/new-activity/${clubId}`);
    }
  });
};
