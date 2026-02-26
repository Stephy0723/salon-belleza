import services from "./data/services.json";

export function getAllServices() {
  return services;
}

export function getFeaturedServices() {
  return services.filter((service) => service.destacado);
}
