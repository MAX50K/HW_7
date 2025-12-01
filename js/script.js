import Handlebars from "../node_modules/handlebars";
import template from "./templates/products.hbs";
import { products } from "../data.js";

const container = document.getElementById("products-container");

const html = template({ products });

container.innerHTML = html;
