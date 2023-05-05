export const utilsMixins = {
  data() {
    return {
      formErrors: {},
    };
  },
  methods: {
    formatter(string) {
      let salida = [];
      let arrayString = string.split("-");
      arrayString.forEach((element) => {
        element = element.replace(element[0], element[0].toUpperCase());
        salida.push(element);
      });
      return salida.join(" ");
    },
    formatSearch(string) {
      let salida = string.replace(" ", "-");
      salida = salida.toLowerCase();
      return salida;
    },
    getColor(valor) {
      const maxValor = 250;
      const porcentaje = valor / maxValor;
      const r = Math.round(255 * (1 - porcentaje));
      const g = Math.round(255 * porcentaje);
      const b = 0;

      return { r, g, b };
    },
    getWidth(valor) {
      const maxValor = 220;
      const porcentaje = (valor / maxValor) * 100;
      return porcentaje;
    },
  }
}