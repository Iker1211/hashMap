import HashMap from "./hashMap.js";

let hashMap = new HashMap();

hashMap.set("tesis", "relaciones");
hashMap.set("amigo", "relaciones");
hashMap.set("artefacta", "relaciones");
hashMap.set("bueno", "relaciones");
hashMap.set("alo", "relaciones");
hashMap.set("si", "relaciones");
hashMap.set("eso", "relaciones");
hashMap.set("ahora", "relaciones");
hashMap.set("que hacemos", "relaciones");
hashMap.set("demonio", "relaciones");
hashMap.set("duolingo", "relaciones");
hashMap.set("buenas", "relaciones");
hashMap.set("tardes", "relaciones");
hashMap.set("general", "relaciones");
hashMap.set("artificial", "relaciones");
hashMap.set("relacional", "relaciones");
hashMap.set("ecuatoriano", "razonando");

console.log(hashMap.values());
console.log(hashMap.length());
console.log(hashMap.keys());
console.log(hashMap.entries());
hashMap.remove("ecuatoriano");
console.log(hashMap.has("ecuatoriano"));
console.log(hashMap.hash(""));
console.log(hashMap.entries());
