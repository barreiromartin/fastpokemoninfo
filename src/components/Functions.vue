<script>
export function formatter(string) {
  let salida = [];
  arrayString = string.split("-");
  arrayString.forEach((element) => {
    element = element.replace(element[0], element[0].toUpperCase());
    salida.push(element);
  });
  return salida.join(" ");
}

export function formatSearch(string) {
  salida = string.replace(" ", "-");
  salida = salida.toLowerCase();
  return salida;
}

</script>