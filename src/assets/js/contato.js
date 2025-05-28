export function toggleContato(contatoRef) {
  const contato = contatoRef.value;

  if (contato.classList.contains("hidden")) {
    contato.classList.remove("hidden", "opacity-0");
    contato.classList.add("opacity-100");
  } else {
    contato.classList.add("opacity-0");
    setTimeout(() => {
      contato.classList.add("hidden");
    }, 300);
  }
}
