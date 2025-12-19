window.onload = () => {
  Swal.fire({
    html: `
      <div class="gif-header"></div>
      <div class="content1">
        <h2>Hello 👋 I’m SHAHROZ KHAN</h2>
        <p>
          Frontend Developer<br>
          Turning ideas into<br>
          <b>beautiful & functional web experiences</b>
        </p>
        <p style="margin-top:10px;font-size:13px;opacity:0.8">
           Let’s take a look at my professional world🚀
        </p>
      </div>
    `,
    showConfirmButton: true,
    confirmButtonText: "Enter Portfolio",
    confirmButtonColor: "#3b82f6",
    background: "transparent",
    backdrop: "rgba(0,0,0,0.85)",
    showClass: {
      popup: "animate__animated animate__fadeInUp animate__faster"
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown animate__faster"
    }
  });
};


