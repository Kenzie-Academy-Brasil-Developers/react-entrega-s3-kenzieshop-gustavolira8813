import { ADD_PRODUCT } from "./actionsType";

const defaultState = [
  {
    name: "Notebook",
    price: 3789.9,
    description: "O que há de melhor no mercado",
    image:
      "https://images.kabum.com.br/produtos/fotos/149914/notebook-asus-amd-ryzen-5-3500u-8gb-256gb-ssd-15-6-windows-10-home-cinza-m515da-ej502t_1621425554_m.jpg",
    isADD: false,
  },
  {
    name: "Impressora",
    price: 1099.9,
    description: "Impressões rápidas e de qualidade",
    image:
      "https://a-static.mlcdn.com.br/618x463/impressora-multifuncional-hp-deskjet-ink-advantage-2774-jato-de-tinta-colorida-wi-fi-usb/magazineluiza/135301200/0b79be11f1cbb43e27294897322b72d5.jpg",
    isADD: false,
  },
  {
    name: "Smartphone",
    price: 3599.9,
    description: "Lançamento do ano",
    image:
      "data:image/jpeg;base64,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",
    isADD: false,
  },
  {
    name: "Monitor",
    price: 1199.9,
    description: "Não perca nenhum momento com este monitor",
    image:
      "https://images.tcdn.com.br/img/img_prod/740836/monitor_concordia_gamer_curvo_c240_23_8_led_full_hd_hdmi_vga_black_8331_1_6f9ba37ce3745808b4b27d16f16149b6.jpg",
    isADD: false,
  },
  {
    name: "Power Bank",
    price: 98.9,
    description: "Suporta até 4 cargas",
    image:
      "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/p/o/power-bank-cb132-concept-8000mah-multilaser_258617_1.jpg",
    isADD: false,
  },
  {
    name: "HD Seagate",
    price: 289.9,
    description: "Rápido e silencioso",
    image:
      "https://img.terabyteshop.com.br/produto/g/hd-seagate-barracuda-st1000dm010-1tb-7200rpm-64mb-sata-iii_36317.jpg",
    isADD: false,
  },
  {
    name: "SSD SanDisk",
    price: 145.9,
    description: "A nova tecnologia de armazenamento, mais rápido e seguro",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_881516-MLA40178190464_122019-O.jpg",
    isADD: false,
  },
  {
    name: "Memória RAM DDR4",
    price: 257.17,
    description: "Turbine seu computador com essa memória hiper-x",
    image:
      "https://a-static.mlcdn.com.br/618x463/memoria-ram-4-gb-1x4gb-kingston-hx424c15fb-4/hequipelcomputers/nmemhfyddr424004g/d7454180c8036cedf78912e1e7d9f3eb.jpg",
    isADD: false,
  },
  {
    name: "Processador i7 kaby-lake",
    price: 2998.99,
    description: "Torne-se super rápido com o i7 ",
    image:
      "https://images.kabum.com.br/produtos/fotos/102522/processador-intel-core-i7-9700kf-coffee-lake-refresh-cache-12mb-3-6ghz-4-9ghz-max-turbo-lga-1151-bx80684i79700kf_processador-intel-core-i7-9700kf-coffee-lake-refresh-cache-12mb-3-6ghz-4-9ghz-max-turbo-lga-1151-bx80684i79700kf_1562763085_g.jpg",
    isADD: false,
  },
];

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    //pega o dado pronto do action e ja faz a troca do state
    case ADD_PRODUCT:
      return [...state];

    default:
      return state;
  }
};

export default productsReducer;
