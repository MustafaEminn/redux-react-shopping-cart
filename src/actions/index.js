export const sepeteEkle = (product) => {
  return { type: "SEPETE_EKLE", payload: product };
};
export const sepetSil = (product) => {
  return { type: "SEPET_SIL", payload: product };
};
