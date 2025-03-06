function status(request, response) {
  response.status(200).json({
    message: "Num é que estou aprendendo com o curso.dev! 🤩",
  });
}

export default status;
