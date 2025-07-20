import Swal from "sweetalert2";

const swalAlert = (type, description) => {
  Swal.fire({
    icon: type,
    title: type.charAt(0).toUpperCase() + type.slice(1),
    text: description,
    confirmButtonText: "OK",
  });
};

export default swalAlert;
